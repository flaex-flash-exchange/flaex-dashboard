import { toast } from "react-toastify";

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

export function formatNumber(num: number, decimalLength: number = 2) {
  return num.toFixed(decimalLength);
}

export function _onLongShortCalculator(
  leverage: number,
  amount: number,
  entryPrice: string,
) {
  const onParseLeverage = leverage / 100;
  const onParseEntryPrice = Number(entryPrice);
  const paying = amount / (1 + onParseLeverage);
  const flashSwap = paying * onParseLeverage;
  const borrowingToRepayFlash = flashSwap * onParseEntryPrice * 1.0005;
  const liquidationPrice = 1.1 * (borrowingToRepayFlash / amount);
  const marginRatio = amount / (borrowingToRepayFlash / onParseEntryPrice);
  const commissionFee = flashSwap * onParseEntryPrice * 0.0005;

  return {
    paying: formatNumber(paying) || 0,
    flashSwap: formatNumber(flashSwap) || 0,
    borrowingToRepayFlash: formatNumber(borrowingToRepayFlash) || 0,
    entryPrice: formatNumber(onParseEntryPrice) || 0,
    liquidationPrice: formatNumber(liquidationPrice) || 0,
    marginRatio: formatNumber(marginRatio) || 0,
    commissionFee: formatNumber(commissionFee) || 0,
  };
}
