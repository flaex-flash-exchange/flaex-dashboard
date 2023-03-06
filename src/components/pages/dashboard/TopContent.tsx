import HorizontalTable from "components/common/HorizontalTable";
import React from "react";

const TopContent = () => {
  return (
    <div>
      <HorizontalTable
        totalRow={totalRowTerm}
        detailRows={detailRowsTerm}
        colNumber={2}
      />
    </div>
  );
};

export default TopContent;

const totalRowTerm = { title: "Overview" };

const detailRowsTerm = [
  {
    title: "24h Volume",
    value: "",
    children: [
      { title: "ETH/DAI", value: "12%" },
      { title: "BTC/DAI", value: "14%" },
    ],
  },
  {
    title: "Fee",
    value: "",
    children: [
      { title: "ETH/DAI", value: "12%" },
      { title: "BTC/DAI", value: "14%" },
    ],
  },
  {
    title: "Long",
    value: "",
    children: [
      { title: "ETH/DAI", value: "12%" },
      { title: "BTC/DAI", value: "14%" },
    ],
  },
  {
    title: "Short",
    value: "",
    children: [
      { title: "ETH/DAI", value: "12%" },
      { title: "BTC/DAI", value: "14%" },
    ],
  },
];