import { Decimal } from "decimal.js";
import { BigNumber } from "ethers";
export const convertCurrency = (number: number) => {
  return "$" + number;
};

export function parseAmount(num: BigNumber, decimals: number = 18) {
  return new Decimal(num._hex).div(new Decimal(10).pow(decimals)).toNumber();
}
