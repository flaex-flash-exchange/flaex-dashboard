import SliderCustom from "components/common/SliderCustom";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import { useContextTrade } from "context/TradeContext";
import Decimal from "decimal.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useAccount } from "wagmi";

const CloseRepay = () => {
  const { isConnected } = useAccount();

  const [isRepay, setIsPay] = useState<boolean>(true);
  const [percentage, setPercentage] = useState<number>(0);
  const [btnConnected, setbtnConnected] = useState(false);
  const { setIsShowLong, repayCloseData } = useContextTrade();

  const available = isRepay
    ? new Decimal(repayCloseData?.quoteTokenAmount).mul(0.9999).toFixed(4)
    : new Decimal(repayCloseData?.baseTokenAmount).toFixed(4);

  const [amountValue, setAmount] = useState<number | string>(
    new Decimal(available).mul(percentage).div(100).toFixed(4),
  );

  const handleChangeLongShort = (clicked: boolean) => {
    if (clicked) {
      setIsPay(true);
    } else {
      setIsPay(false);
    }
  };

  const handleChangeSlider = (value: number) => {
    const amount = (Number(available) * value) / 100;
    setAmount(amount);
    setPercentage(value);
  };

  const handleChangeAmount = (value: number) => {
    const percen = (value / repayCloseData?.quoteTokenAmount) * 100;
    setAmount(value);
    setPercentage(percen);
  };

  const handleBackToTrade = () => {
    setIsShowLong(true);
  };

  useEffect(() => {
    setbtnConnected(isConnected);
  }, [isConnected]);

  const marginRatioAfter = useMemo(() => {
    if (!amountValue) return 0;
    return repayCloseData?.isLong
      ? new Decimal(repayCloseData?.baseTokenAmount)
          .minus(amountValue)
          .mul(new Decimal(repayCloseData?.markPrice))
          .div(new Decimal(repayCloseData?.quoteTokenAmount))
          .toNumber()
      : new Decimal(repayCloseData?.baseTokenAmount)
          .minus(amountValue)
          .div(
            new Decimal(
              new Decimal(repayCloseData?.quoteTokenAmount).mul(
                new Decimal(repayCloseData?.markPrice),
              ),
            ),
          )
          .toNumber();
  }, [amountValue, repayCloseData]);

  const receive = useMemo(() => {
    return new Decimal(repayCloseData?.quoteTokenAmount)
      .mul(new Decimal(repayCloseData?.pnlPercent))
      .div(100)
      .mul(new Decimal(percentage).div(100))
      .toFixed(4);
  }, [percentage, repayCloseData]);

  useEffect(() => {
    if (percentage > 0) {
      setAmount(new Decimal(available).mul(percentage).div(100).toFixed(4));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repayCloseData]);

  const onSetMax = useCallback(() => {
    setAmount(new Decimal(available).toNumber());
    setPercentage(isRepay ? 99.99 : 100);
  }, [available, isRepay]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex text-base font-semibold bg-flaex-border bg-opacity-5 rounded-[10px]">
        <button
          onClick={() => {
            handleChangeLongShort(true);
          }}
          className={`flex-1 ${
            isRepay ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          Repay
        </button>

        <button
          onClick={() => {
            handleChangeLongShort(false);
          }}
          className={`flex-1 ${
            !isRepay ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          Close
        </button>
      </div>

      <div>
        <button
          onClick={() => handleBackToTrade()}
          className="center-all mt-4 gap-2 w-full justify-end hover:text-flaex-primary"
        >
          <FaArrowLeft size={11} />
          <span className="text-xs italic font-normal"> Back to Trade</span>
        </button>
      </div>

      <div className="mt-[8px]">
        <div className="text-sm font-semibold">
          {isRepay ? "Repay Percentage" : "Close Percentage"}
        </div>

        {isRepay && (
          <div className="flex justify-between rounded-[10px] bg-flaex-border bg-opacity-5 py-1 px-2 mt-2">
            <input
              className="bg-transparent outline-none w-full"
              onChange={(e: any) => handleChangeSlider(e.target.value)}
              value={percentage}
              max={isRepay ? 99.99 : 100}
              type="number"
            />
            <div className="mr-2">%</div>
          </div>
        )}

        <div className="mt-8">
          <SliderCustom
            value={percentage}
            onChangeValue={handleChangeSlider}
            // disabled={!isRepay}
            marks={isRepay ? marks_99 : marks_100}
            max={isRepay ? 99.99 : 100}
          />
        </div>
      </div>

      <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-12">
        <div className="flex justify-between text-[12px] font-light">
          <span>Amount</span>
          <span className="cursor-pointer" onClick={() => onSetMax()}>
            Available
          </span>
        </div>
        <div className="flex justify-between mt-2.5 font-normal text-sm">
          <input
            className="bg-transparent outline-none w-full"
            onChange={(e: any) => handleChangeAmount(e.target.value)}
            value={amountValue}
            // readOnly={!isRepay}
          />
          <span className="cursor-pointer" onClick={() => onSetMax()}>
            {available}
          </span>
        </div>
      </div>

      <div className="mt-5">
        {isRepay ? (
          <>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Entry Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.entryPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.markPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Liquidation Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.liquidPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Margin Ratio:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.marginRatio}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Margin Ratio After:</p>
              <p className="text-sm font-semibold">{marginRatioAfter}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">PnL:</p>
              <p className="text-sm font-semibold">
                {`${repayCloseData?.pnlPercent} %`}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Entry Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.entryPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.markPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Liquidation Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.liquidPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Margin Ratio:</p>
              <p className="text-sm font-semibold">
                {repayCloseData?.marginRatio}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Margin Ratio After:</p>
              <p className="text-sm font-semibold">{marginRatioAfter}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">PnL:</p>
              <p className="text-sm font-semibold">
                {`${repayCloseData?.pnlPercent} %`}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Receive:</p>
              <p className="text-sm font-semibold">
                {Number(receive) < 0 ? 0 : receive}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Commission Fee:</p>
              <p className="text-sm font-semibold">{0}</p>
            </div>
          </>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-end">
        {btnConnected ? (
          <button className="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full">
            {isRepay ? "Repay Partial Debt" : "Close Position"}
          </button>
        ) : (
          <LiteWagmiBtnConnect />
        )}
      </div>
    </div>
  );
};

export default CloseRepay;

const marks_99 = {
  0: <strong>0%</strong>,
  10: "10%",
  20: "20%",
  30: "30%",
  40: "40%",
  50: "50%",
  60: "60%",
  70: "70%",
  80: "80%",
  90: "90%",
  99.99: {
    style: {
      color: "red",
    },
    label: <strong>99.99%</strong>,
  },
};
const marks_100 = {
  0: <strong>0%</strong>,
  10: "10%",
  20: "20%",
  30: "30%",
  40: "40%",
  50: "50%",
  60: "60%",
  70: "70%",
  80: "80%",
  90: "90%",
  100: {
    style: {
      color: "red",
    },
    label: <strong>100.00%</strong>,
  },
};

// PNL = markPrice/entryPrice * leverage
// marginRatio = colateral/debt (same unit)
// marginRatioAfter = colateral/( - amount) (same unit)
// wallet 6xx...4xx
// block number at  bottom
// debt;
