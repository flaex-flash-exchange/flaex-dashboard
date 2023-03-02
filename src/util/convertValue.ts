import { Decimal } from "decimal.js";
import { BigNumber, utils } from "ethers";
import { testERC20, interfaceEvents } from "contracts";
import { amountToHex, BigNumberToReadableAmount } from "./commons";
import { argNames, eventLogs } from "./constants";

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
    let data = log[i].data;
    let topics = log[i].topics;
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
  let result = [];
  for (let i = 0; i < log.length; i++) {
    let item = null;
    let data = log[i].data;
    let topics = log[i].topics;
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

export const getOpenInfo = (isLong: boolean, log: Array<any>) => {
  let Amount: any = 0;
  let Price: any = 0;
  if (isLong) {
    const loggedOpen = getEvent(log, eventLogs.ORDER_OPEN);
    console.log("logged open here", loggedOpen);

    Amount = BigNumberToReadableAmount(loggedOpen[5], 18);
    Price = BigNumberToReadableAmount(
      loggedOpen[6]
        .mul(toBigNumber(1, 18))
        .mul(toBigNumber(1, 4))
        .div(loggedOpen[4])
        .div(loggedOpen[3]),
      18,
    );
  } else {
    const loggedOpen = getEvent(log, eventLogs.ORDER_OPEN);
    Price = BigNumberToReadableAmount(
      loggedOpen[3]
        .mul(toBigNumber(1, 18))
        .mul(loggedOpen[4])
        .div(toBigNumber(1, 4))
        .div(loggedOpen[6]),
      18,
    );
    Amount = BigNumberToReadableAmount(
      loggedOpen[5].div(
        loggedOpen[3]
          .mul(loggedOpen[4])
          .div(toBigNumber(1, 4))
          .div(loggedOpen[6]),
      ),
      18,
    );
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
  let isLong: boolean;

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

  isLong = loggedClosed[1] === token0;

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
