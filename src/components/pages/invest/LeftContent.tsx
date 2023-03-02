import HorizontalTable from "components/common/HorizontalTable";
import React from "react";

const LeftContent = () => {
  return (
    <div>
      <div className="flex justify-between text-lg font-semibold bg-border-flaex py-[18px] px-[19px]">
        <p>Eligible Stable Coin</p>
        <p>USDC</p>
      </div>

      <div className="mt-2.5">
        <HorizontalTable totalRow={totalRowTerm} detailRows={detailRowsTerm} />
      </div>

      <div className="bg-border-flaex mt-2.5 pb-[12px] pt-[10px] px-[19px]">
        {descInvest.map((item: any, idx: any) => (
          <div key={idx} className="flex justify-between mt-1">
            <div className="font-light text-[14px]">{item.title}</div>
            <div className="font-semibold text-[16px]">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftContent;

const totalRowTerm = { title: "Total APY", value: "58.8%" };

const detailRowsTerm = [
  { title: "AAVE", value: "2.8%" },
  {
    title: "flæx",
    value: "56%",
    children: [
      { title: "WBTC", value: "12%" },
      { title: "WETH", value: "14%" },
      { title: "USDC", value: "20%" },
      { title: "USDT", value: "10%" },
    ],
  },
];

const descInvest = [
  { title: "Total Invested", value: "4,794,877 USDC" },
  { title: "Current Health Factor", value: "1.89" },
  { title: "Available to Invest", value: "285,479 USDC" },
];
