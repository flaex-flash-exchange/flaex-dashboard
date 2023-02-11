import { useAccount } from "wagmi";
import React, { useEffect, useMemo, useState } from "react";
import BaseButton from "components/common/BaseButton";
import SliderCustom from "components/common/SliderCustom";
import { ConnectWalletBtn } from "components/layout/ConnectButton";

type ILongShort = { data?: any };

const LSBtn = {
  LONG: "Long",
  SHORT: "Short",
};

const LongShort = ({ data = mockData }: ILongShort) => {
  const { isConnected } = useAccount();

  const [isLong, setIsLong] = useState<boolean>(true);
  const [amountValue, setAmount] = useState<number>(10);
  const [payingValue, setPayingValue] = useState<number>(2.941);
  const [balanceValue, setBalanceValue] = useState<number>(4.2);
  const [percentage, setPercentage] = useState<number>(0);
  const [btnConnected, setbtnConnected] = useState(false);

  const btnLabel = useMemo(() => (isLong ? LSBtn.LONG : LSBtn.SHORT), [isLong]);

  const handleChangeLongShort = (clickedLong: boolean) => {
    if (clickedLong) {
      setIsLong(true);
    } else {
      setIsLong(false);
    }
    setAmount(0);
    setPayingValue(0);
    setBalanceValue(0);
    setPercentage(0);
  };

  const handleChangeSlider = (value: number) => {
    setPercentage(value);
  };

  const handleLongShort = (type: string) => {
    switch (type) {
      case LSBtn.LONG:
        console.log("click", type);
        break;
      case LSBtn.SHORT:
        console.log("click", type);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setbtnConnected(isConnected);
  }, [isConnected]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex text-base font-semibold bg-flaex-border bg-opacity-5 rounded-[10px]">
        <button
          onClick={() => {
            handleChangeLongShort(true);
          }}
          className={`flex-1 ${
            isLong ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          {LSBtn.LONG}
        </button>

        <button
          onClick={() => {
            handleChangeLongShort(false);
          }}
          className={`flex-1 ${
            !isLong ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          {LSBtn.SHORT}
        </button>
      </div>

      <div className="mt-[22px]">
        <div className="text-sm font-semibold">Leverage</div>
        <div className="flex justify-between rounded-[10px] bg-flaex-border bg-opacity-5 py-1 px-2 mt-2">
          <input
            className="bg-transparent outline-none"
            onChange={(e: any) => handleChangeSlider(e.target.value)}
            value={percentage}
            max={1000}
            type="number"
          />
          <div className="mr-2">%</div>
        </div>

        <div className="mt-8">
          <SliderCustom
            value={percentage}
            onChangeValue={handleChangeSlider}
            marks={marks}
            max={1000}
          />
        </div>
      </div>

      <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-12">
        <div className="flex justify-between text-[12px] font-light">
          <span>Amount</span>
          <span>Collateral In</span>
        </div>

        <div className="flex justify-between mt-2.5 font-normal text-sm">
          <input
            className="bg-transparent outline-none"
            onChange={(e: any) => setAmount(e.target.value)}
            value={amountValue}
          />
          <span>{data.tokenName}</span>
        </div>
      </div>

      <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-1">
        <div className="flex justify-between text-[12px] font-light">
          <span>Paying</span>
          <span>{data.tokenName}</span>
        </div>

        <div className="flex justify-between mt-2.5 font-normal text-sm">
          <span>{payingValue}</span>
          <span>Balance: {balanceValue}</span>
        </div>
      </div>
      <div className="mt-5">
        {data.descInfo.map((item: any, idx: any) => (
          <div key={idx} className="flex justify-between">
            <p className="text-xs font-light italic">{item.title}</p>
            <p className="text-sm font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col justify-end">
        {btnConnected ? (
          <BaseButton
            btnLabel={`${btnLabel} ${""}`}
            onButtonClick={() => handleLongShort(btnLabel)}
            moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
          />
        ) : (
          <ConnectWalletBtn extendClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none" />
        )}
      </div>
    </div>
  );
};

export default LongShort;

const mockData = {
  amount: 10,
  tokenName: "ETH",
  payingValue: 2.941,
  balanceValue: 4.2,
  descInfo: [
    { title: "Flash Swap:", value: "7.059 ETH" },
    { title: "Borrowing to Repay Flash:", value: "8665.98 USDC" },
    { title: "Entry Price:", value: "1227.65" },
    { title: "Liquidation Price:", value: "960.84" },
    { title: "Margin Ratio:", value: "1.41" },
    { title: "Commission Fee:", value: "8.66 USDC" },
  ],
};

const marks = {
  0: <strong>0%</strong>,
  100: "100%",
  200: "200%",
  300: "300%",
  400: "400%",
  500: "500%",
  600: "600%",
  700: "700%",
  800: "800%",
  900: "900%",
  1000: {
    style: {
      color: "red",
    },
    label: <strong>1000%</strong>,
  },
};
