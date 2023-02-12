import React from "react";
import HistoryTable from "./HistoryTable";

const BottomInfo = () => {
  return (
    <div className="mt-[20px] overflow-auto	">
      <HistoryTable titleRow={titleHistoryRow} data={mockData} />
    </div>
  );
};

export default BottomInfo;

const titleHistoryRow = [
  {
    title: "Direction",
    field: (data: any) => {
      return (
        <div
          className={`${
            data.direction.toLowerCase() === "long"
              ? "text-flaex-green"
              : "text-flaex-red"
          }`}
        >
          {data.direction}
        </div>
      );
    },
    classNameCustom: "text-left",
  },
  { title: "Leverage", field: "leverage" },
  { title: "Collateral", field: "collateral" },
  { title: "Debt", field: "debt" },
  { title: "Entry Price", field: "entryPrice" },
  { title: "Mark Price", field: "markPrice" },
  { title: "Liquidation Price", field: "liquidPrice" },
  { title: "Margin Ratio", field: "marginRatio" },
  {
    title: "PnL (%)",
    field: (data: any) => {
      return (
        <div
          className={`${
            data.pnlPercent > 0 ? "text-flaex-green" : "text-flaex-red"
          }`}
        >
          {data.pnlPercent}%
        </div>
      );
    },
    classNameCustom: "text-right",
  },
  // {
  //   title: "Action",
  //   field: ({ _id }: { _id: string }) => {
  //     return <div className="flex justify-around gap-4"></div>;
  //   },
  // },
];

const mockData = [
  {
    direction: "Long",
    leverage: "500%",
    collateral: "12 ETH",
    debt: "8000 USDC",
    entryPrice: 1100,
    markPrice: 1227.1,
    liquidPrice: 990.7,
    marginRatio: 1.6,
    pnlPercent: 150,
  },
  {
    direction: "Short",
    leverage: "400%",
    collateral: "12000 USDC",
    debt: "4 ETH",
    entryPrice: 1321.6,
    markPrice: 1227.1,
    liquidPrice: 1406.8,
    marginRatio: 1.23,
    pnlPercent: -67,
  },
];
