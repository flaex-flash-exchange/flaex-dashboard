import { Decimal } from "decimal.js";
import { BigNumber, utils } from "ethers";
import { TestERC20, interfaceEvents } from "contracts";
import { amountToHex, BigNumberToReadableAmount } from "./commons";
import { argNames, eventLogs } from "./constants";
import { type } from "os";
import { contractAddress } from "constants/contractAddress";

export const convertCurrency = (number: number) => {
  return "$" + number;
};

export function parseAmount(num: BigNumber, decimals: number = 18) {
  return new Decimal(num._hex).div(new Decimal(10).pow(decimals)).toNumber();
}

export function toBigNumber(
  num: number | Decimal,
  decimals: number = 18,
): BigNumber {
  return BigNumber.from(
    new Decimal(num).mul(new Decimal(10).pow(decimals)).toHex(),
  );
}

export const iFace = new utils.Interface(interfaceEvents);

const getEvent = (log: Array<any>, eventName: string) => {
  for (let i = 0; i < log.length; i++) {
    let item = null;
    const data = log[i].data;
    const topics = log[i].topics;
    try {
      item = iFace.parseLog({ data, topics });
    } catch (err: any) {
      continue;
    }
    if (item.name === eventName) {
      return item.args;
    }
  }
};

const getERCTransferEvent = (
  log: Array<any>,
  eventName: string,
  userAddress: string,
  toUser: boolean,
) => {
  const result = [];
  for (let i = 0; i < log.length; i++) {
    let item = null;
    const data = log[i].data;
    const topics = log[i].topics;
    try {
      item = iFace.parseLog({ data, topics });
    } catch (err: any) {
      continue;
    }
    if (item.name === eventName && item.args[toUser ? 1 : 0] === userAddress) {
      result.push(item.args);
    }
  }
  return result;
};

export const getOpenInfo = (
  isLong: boolean,
  log: Array<any>,
  token0Decimal: number,
  token1Decimal: number,
) => {
  let Amount: any = 0;
  let Price: any = 0;
  if (isLong) {
    const loggedOpen = getEvent(log, eventLogs.ORDER_OPEN);
    Amount = new Decimal(loggedOpen.baseTokenAmount._hex).div(
      new Decimal(10).pow(token0Decimal),
    );
    Price = new Decimal(loggedOpen.quoteTokenAmount._hex).div(
      new Decimal(loggedOpen.baseMarginAmount._hex)
        .mul(loggedOpen.marginLevel._hex)
        .div(10000),
    );
  } else {
    const loggedOpen = getEvent(log, eventLogs.ORDER_OPEN);
    (Price = new Decimal(loggedOpen.baseMarginAmount._hex)
      .mul(loggedOpen.marginLevel._hex)
      .div(loggedOpen.quoteTokenAmount._hex)
      .div(10000)),
      (Amount = new Decimal(loggedOpen.baseTokenAmount._hex)
        .div(Price)
        .div(new Decimal(10).pow(token1Decimal)));
  }
  return { Amount, Price };
};

export const getCloseInfo = (
  token0: string,
  log: Array<any>,
  userAddress: string,
) => {
  let Amount: any = 0;
  let Price: any = 0;
  let receiveBase: any = 0;
  let receiveQuote: any = 0;

  const sqrt = toBigNumber(2 ** 96, 0);

  const loggedClosed = getEvent(log, eventLogs.ORDER_CLOSE);
  const loggedSwap = getEvent(log, eventLogs.SWAP);
  const loggedERC = getERCTransferEvent(
    log,
    eventLogs.TRANSFER,
    userAddress,
    true,
  );

  const baseLtQuote = loggedClosed[1] < loggedClosed[2];

  const isLong = loggedClosed[1] === token0;

  if (isLong) {
    Amount = BigNumberToReadableAmount(loggedClosed[3], 18);

    Price = baseLtQuote
      ? BigNumberToReadableAmount(
          loggedSwap[4]
            .mul(loggedSwap[4])
            .mul(toBigNumber(1, 18))
            .div(sqrt)
            .div(sqrt)
            .mul(9995)
            .div(10000),
          18,
        )
      : BigNumberToReadableAmount(
          toBigNumber(1, 36)
            .div(
              loggedSwap[4]
                .mul(loggedSwap[4])
                .mul(toBigNumber(1, 18))
                .div(sqrt)
                .div(sqrt),
            )
            .mul(9995)
            .div(10000),
          18,
        );
    if (loggedERC.length === 2) {
      receiveBase = BigNumberToReadableAmount(loggedERC[0][2], 18);
      receiveQuote = BigNumberToReadableAmount(loggedERC[1][2], 18);
    } else if (loggedERC.length === 1) {
      receiveQuote = BigNumberToReadableAmount(loggedERC[0][2], 18);
    }
  } else {
    Amount = BigNumberToReadableAmount(loggedClosed[4], 18);

    Price = !baseLtQuote
      ? BigNumberToReadableAmount(
          loggedSwap[4]
            .mul(loggedSwap[4])
            .mul(toBigNumber(1, 18))
            .div(sqrt)
            .div(sqrt)
            .mul(9995)
            .div(10000),
          18,
        )
      : BigNumberToReadableAmount(
          toBigNumber(1, 36)
            .div(
              loggedSwap[4]
                .mul(loggedSwap[4])
                .mul(toBigNumber(1, 18))
                .div(sqrt)
                .div(sqrt),
            )
            .mul(9995)
            .div(10000),
          18,
        );

    if (loggedERC.length === 2) {
      receiveBase = BigNumberToReadableAmount(loggedERC[0][2], 18);
      receiveQuote = BigNumberToReadableAmount(loggedERC[1][2], 18);
    } else if (loggedERC.length === 1) {
      receiveQuote = BigNumberToReadableAmount(loggedERC[0][2], 18);
    }
  }

  return { Amount, Price, receiveBase, receiveQuote, isLong };
};

export const getRepayInfo = (
  token0: string,
  log: Array<any>,
  userAddress: string,
) => {
  let Amount: any = 0;

  const loggedRepaid = getEvent(log, eventLogs.REPAY);

  const isLong = token0 === loggedRepaid[2];

  Amount = BigNumberToReadableAmount(loggedRepaid[3], 18);

  return { Amount, isLong };
};

export const getProvideInfo = (log: Array<any>) => {
  const loggedProvided = getEvent(log, eventLogs.ASSET_PROVIDED);
  return new Decimal(loggedProvided.amount._hex).div(new Decimal(10).pow(18));
};

export const getClaimYieldInfo = (log: Array<any>) => {
  const loggedClaimed = getEvent(log, eventLogs.YIELD_CLAIMED);

  const tokenList = loggedClaimed.yieldTokenAddress;
  const tokenAmount = loggedClaimed.amount;

  let result = {};

  for (let i = 0; i < tokenList.length; i++) {
    if (tokenList[i] !== contractAddress.ADD0) {
      const tokenSymbol = Object.keys(contractAddress).find(
        (key) => contractAddress[key] === tokenList[i],
      );
      result[tokenSymbol] = BigNumberToReadableAmount(tokenAmount[i], 18);
    }
  }

  return result;
};

export const getWithdrawInfo = (log: Array<any>) => {
  const loggedWithdrawn = getEvent(log, eventLogs.ASSET_WITHDRAWN);

  const amountWithdrawn = new Decimal(loggedWithdrawn.amount._hex).div(
    new Decimal(10).pow(18),
  );
  const YieldInfo = getClaimYieldInfo(log);

  return { amountWithdrawn, YieldInfo };
};
