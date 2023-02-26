import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import { toast } from "react-toastify";
import { S_LONG_SHORT_TYPE } from "./constants";

export function handleCopyToClipboard(text: string) {
  const notify = () => toast.success("Copied Successfully", { theme: "dark" });
  navigator.clipboard.writeText(text).then(
    function () {
      notify();
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    },
  );
}

export function splitStringOnSlash(str: string) {
  const indexOfSlash = str.indexOf("/");
  if (indexOfSlash !== -1) {
    return [str.slice(0, indexOfSlash), str.slice(indexOfSlash + 1)];
  } else {
    return [null, null];
  }
}

export function formatNumber(num: number, decimalLength: number = 4) {
  return num.toFixed(decimalLength);
}

export function amountToHex(num: number | string, decimals: number) {
  return new Decimal(num).mul(new Decimal(10).pow(decimals)).toHex();
}

export function BigNumberToReadableAmount(num: BigNumber, decimals: number) {
  return new Decimal(num._hex).div(new Decimal(10).pow(decimals)).toFixed(4);
}

export function _onLongCalculator(
  leverage: number,
  amount: number,
  entryPrice: string,
) {
  const onParseLeverage = leverage / 100;
  if (onParseLeverage >= 1) {
    const onParseEntryPrice = new Decimal(entryPrice).toNumber() || 0;
    const onPaying = amount / (1 + onParseLeverage) || 0;
    const flashSwap = onPaying * onParseLeverage || 0;
    const borrowingToRepayFlash = flashSwap * onParseEntryPrice * 1.0005 || 0;
    const liquidationPrice = 1.1 * (borrowingToRepayFlash / amount) || 0;
    const marginRatio =
      amount / (borrowingToRepayFlash / onParseEntryPrice) || 0;
    const commissionFee = flashSwap * onParseEntryPrice * 0.0005 || 0;
    return {
      paying: formatNumber(onPaying),
      flashSwap: formatNumber(flashSwap),
      borrowingToRepayFlash: formatNumber(borrowingToRepayFlash),
      entryPrice: formatNumber(onParseEntryPrice),
      liquidationPrice: formatNumber(liquidationPrice),
      marginRatio: formatNumber(marginRatio),
      commissionFee: formatNumber(commissionFee),
    };
  }
  return {
    paying: formatNumber(0),
    flashSwap: formatNumber(0),
    borrowingToRepayFlash: formatNumber(0),
    entryPrice: formatNumber(0),
    liquidationPrice: formatNumber(0),
    marginRatio: formatNumber(0),
    commissionFee: formatNumber(0),
  };
}
export function _onShortCalculator(
  leverage: number,
  amount: number,
  entryPrice: string,
) {
  const onParseLeverage = leverage / 100 || 0;
  if (onParseLeverage >= 1) {
    const onParseEntryPrice = new Decimal(entryPrice).toNumber() || 0;
    const paying = (amount * onParseEntryPrice) / (1 + onParseLeverage) || 0;
    const flashSwap = paying * onParseLeverage || 0;
    const borrowingToRepayFlash = (flashSwap / onParseEntryPrice) * 1.0005 || 0;
    const liquidationPrice =
      1 / (1.1 * (borrowingToRepayFlash / (amount * onParseEntryPrice))) || 0;
    const marginRatio = amount / borrowingToRepayFlash || 0;
    const commissionFee = (flashSwap / onParseEntryPrice) * 0.0005 || 0;

    return {
      paying: formatNumber(paying),
      flashSwap: formatNumber(flashSwap),
      borrowingToRepayFlash: formatNumber(borrowingToRepayFlash),
      entryPrice: formatNumber(onParseEntryPrice),
      liquidationPrice: formatNumber(liquidationPrice),
      marginRatio: formatNumber(marginRatio),
      commissionFee: formatNumber(commissionFee),
    };
  }

  return {
    paying: formatNumber(0),
    flashSwap: formatNumber(0),
    borrowingToRepayFlash: formatNumber(0),
    entryPrice: formatNumber(0),
    liquidationPrice: formatNumber(0),
    marginRatio: formatNumber(0),
    commissionFee: formatNumber(0),
  };
}

export const splitString = (
  str: string,
  countStart: number = 6,
  countEnd = 4,
) => {
  return `${str.substr(0, countStart)}...${str.substr(
    str.length - countEnd,
    str.length,
  )}`;
};
