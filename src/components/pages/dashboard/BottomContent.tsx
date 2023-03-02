import HorizontalTable from "components/common/HorizontalTable";
import React from "react";

const BottomContent = () => {
  return (
    <div className="md:flex justify-between gap-8">
      <div className="flex-1">
        <HorizontalTable
          totalRow={totalOverviewRowTerm}
          detailRows={detailOverviewRowsTerm}
        />
      </div>

      <div className="flex-1 mt-6 md:mt-0">
        <HorizontalTable
          totalRow={totalInvestorRowTerm}
          detailRows={detailInvestorRowsTerm}
        />
      </div>
    </div>
  );
};

export default BottomContent;

const totalOverviewRowTerm = { title: "User Stats" };

const detailOverviewRowsTerm = [
  { title: "Total User", value: "2.0000.000" },
  {
    title: "New user",
    value: "30.000",
  },
  {
    title: "User Growth",
    value: "20%",
  },
  {
    title: "Active Users 30 Days",
    value: "3.000",
  },
];

const totalInvestorRowTerm = { title: "Investor" };

const detailInvestorRowsTerm = [
  { title: "Total Investor", value: "4,794,877 USDC" },
  { title: "Total Invested", value: "3,794,877 USDC" },
  { title: "Total Distributed", value: "2,794,877 USDC" },
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
