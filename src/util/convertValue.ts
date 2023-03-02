import { Decimal } from "decimal.js";
import { BigNumber, utils } from "ethers";
import { testERC20 } from "contracts";
import { BigNumberToReadableAmount } from "./commons";
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

export const defineInterface = new utils.Interface(testERC20.abi);

const findEvent = (data: Array<any>, eventName: string) => {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let item = null;
    try {
      item = defineInterface.parseLog(element);
    } catch (err: any) {
      continue;
    }
    if (item && item.name === eventName) {
      return item;
    }
  }
};

export const parseTokenAmount = (
  data: Array<any>,
  method: string = eventLogs.ORDER_OPEN,
  arg: string = argNames.BASE_TOKEN_AMOUNT,
  isLong: boolean = true,
) => {
  const foundEvent = findEvent(data, method);
  if (foundEvent) {
    const result = BigNumberToReadableAmount(
      BigNumber.from(foundEvent.args[arg]),
      18,
    );
    const quotetokenAmount = foundEvent.args[argNames.QUOTE_TOKEN_AMOUNT];
    const basemarginAmount = foundEvent.args[argNames.BASE_MARGIN_AMOUNT];
    const marginLevel = foundEvent.args[argNames.MARGIN_LEVEL];

    const entryPrice = isLong
      ? quotetokenAmount.div(basemarginAmount.mul(marginLevel.div(10000)))
      : basemarginAmount.mul(marginLevel.div(10000)).div(quotetokenAmount);
    if (result) {
      return { amount: result, entryPrice: entryPrice.toNumber() };
    }
    return {
      amount: 0,
      entryPrice: 0,
    };
  }
  return {
    amount: 0,
    entryPrice: 0,
  };
};
