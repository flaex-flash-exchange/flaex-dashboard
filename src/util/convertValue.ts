import { Decimal } from "decimal.js";
import { BigNumber } from "ethers";
export const convertCurrency = (number: number) => {
  return "$" + number;
};

export function parseAmount(num: BigNumber, decimals: number = 18) {
  return new Decimal(num._hex).div(new Decimal(10).pow(decimals)).toNumber();
}

export function toBigNumber(num: number | Decimal, decimals: number = 18) : BigNumber {
  return BigNumber.from(new Decimal(num).mul(new Decimal(10).pow(decimals)).toHex());
}

