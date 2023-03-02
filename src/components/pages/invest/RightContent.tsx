import HorizontalTable from "components/common/HorizontalTable";
import React from "react";
import AmountInvest from "./AmountInvest";
import DrawAmountInvest from "./DrawAmountInvest";

const RightContent = () => {
  return (
    <div>
      <div className="flex justify-between text-lg font-semibold bg-border-flaex py-[18px] px-[19px]">
        <p>Balance</p>
        <p>7916.93 USDC</p>
      </div>

      <div className="mt-2.5">
        <HorizontalTable totalRow={totalRowTerm} detailRows={detailRowsTerm} />
      </div>

      <div className="mt-2 grid grid-cols-5 gap-2.5">
        <div className="col-span-2 ">
          <AmountInvest />
        </div>
        <div className="col-span-3">
          <DrawAmountInvest />
        </div>
      </div>
    </div>
  );
};

export default RightContent;

const totalRowTerm = { title: "Yield Earned", value: "$459.79" };

const detailRowsTerm = [
  { title: "WBTC", value: "0.0014 ($159.85)", isSmallText: true },
  { title: "WETH", value: "0.1 ($101.80)", isSmallText: true },
  { title: "USDC", value: "150 ($151.11)", isSmallText: true },
  { title: "USDT", value: "49 ($48.67)", isSmallText: true },
];
