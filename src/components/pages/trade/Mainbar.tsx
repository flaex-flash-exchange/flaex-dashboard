import React from "react";
import "rc-slider/assets/index.css";
import LongShort from "./LongShort";
import CloseRepay from "./CloseRepay";
import { useContextTrade } from "context/TradeContext";

const Mainbar = () => {
  const { isShowLong } = useContextTrade();

  return (
    <div className="rounded-[10px] border-[0.2px] h-full px-4 py-3">
      {isShowLong === undefined ? <LongShort /> : <CloseRepay />}
    </div>
  );
};

export default Mainbar;
