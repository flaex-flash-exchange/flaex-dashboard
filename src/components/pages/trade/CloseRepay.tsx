import SliderCustom from "components/common/SliderCustom";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import { useContextTrade } from "context/TradeContext";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useAccount } from "wagmi";

type ICloseRepay = { data?: any };

const CloseRepay = ({ data = mockData }: ICloseRepay) => {
  const { isConnected } = useAccount();

  const [isRepay, setIsPay] = useState<boolean>(true);
  const [amountValue, setAmount] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [btnConnected, setbtnConnected] = useState(false);

  const { setIsShowLong, repayClodeData } = useContextTrade();

  const handleChangeLongShort = (clicked: boolean) => {
    if (clicked) {
      setIsPay(true);
    } else {
      setIsPay(false);
    }
    setAmount(0);
  };

  const handleChangeSlider = (value: number) => {
    setPercentage(value);
  };

  const handleBackToTrade = () => {
    setIsShowLong(true);
  };

  // const

  useEffect(() => {
    setbtnConnected(isConnected);
  }, [isConnected]);

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
              className="bg-transparent outline-none"
              onChange={(e: any) => handleChangeSlider(e.target.value)}
              value={percentage}
              max={99.99}
              type="number"
            />
            <div className="mr-2">%</div>
          </div>
        )}

        <div className="mt-8">
          <SliderCustom
            value={percentage}
            onChangeValue={handleChangeSlider}
            disabled={!isRepay}
            marks={marks}
            max={100}
          />
        </div>
      </div>

      <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-12">
        <div className="flex justify-between text-[12px] font-light">
          <span>Amount</span>
          <span>Available</span>
        </div>

        <div className="flex justify-between mt-2.5 font-normal text-sm">
          <input
            className="bg-transparent outline-none"
            onChange={(e: any) => setAmount(e.target.value)}
            value={amountValue}
            readOnly={!isRepay}
          />
          <span>{data.tokenValue}</span>
        </div>
      </div>

      <div className="mt-5">
        {/* {isRepay ? (
          <>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Entry Price:</p>
              <p className="text-sm font-semibold">
                {repayClodeData.entryPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Price:</p>
              <p className="text-sm font-semibold">
                {repayClodeData.entryPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Liquidation Price:</p>
              <p className="text-sm font-semibold">
                {repayClodeData.entryPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Margin Ratio:</p>
              <p className="text-sm font-semibold">
                {repayClodeData.entryPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Margin Ratio After:</p>
              <p className="text-sm font-semibold">
                {repayClodeData.entryPrice}
              </p>
            </div>
          </>
        ) : (
          data.descInfo.close.map((item: any, idx: any) => (
            <div key={idx} className="flex justify-between">
              <p className="text-xs font-light italic">{item.title}</p>
              <p className="text-sm font-semibold">{item.value}</p>
            </div>
          ))
        )} */}
        {isRepay
          ? data.descInfo.repay.map((item: any, idx: any) => (
              <div key={idx} className="flex justify-between">
                <p className="text-xs font-light italic">{item.title}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))
          : data.descInfo.close.map((item: any, idx: any) => (
              <div key={idx} className="flex justify-between">
                <p className="text-xs font-light italic">{item.title}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
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

const mockData = {
  amount: 10,
  tokenValue: "10 ETH",
  payingValue: 2.941,
  balanceValue: 4.2,
  descInfo: {
    close: [
      { title: "Entry Price:", value: "1000" },
      { title: "Current Price:", value: "1127.65" },
      { title: "Entry Price:", value: "1227.65" },
      { title: "Liquidation Price:", value: "960.84" },
      { title: "Margin Ratio:", value: "12.27 %" },
      { title: "PnL:", value: "12.27 %" },
      { title: "Receive:", value: "2.1 ETH" },

      { title: "Commission Fee:", value: "2.69 USDC" },
    ],
    repay: [
      { title: "Entry Price:", value: "1000" },
      { title: "Current Price:", value: "1127.65" },
      { title: "Liquidation Price:", value: "1227.65" },
      { title: "Current Margin Ratio:", value: "1.2" },
      { title: "Margin Ratio After:", value: "1.4" },
      { title: "PnL:", value: "12.27 %" },
    ],
  },
};

const marks = {
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

// PNL = markPrice/entryPrice * leverage
// marginRatio = colateral/debt (same unit)
// marginRatioAfter = colateral/(debt - amount) (same unit)
// wallet 6xx...4xx
// block number at  bottom
