import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { IBottomProps, ILongShortData } from "constants/interface";
import { useContextTrade } from "context/TradeContext";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import { useLongShortData } from "hooks/useLongShortData";
// import { useLongShortData } from "hooks/useLongShortData";
import useQuoter from "hooks/useQuote";
import { useCallback, useEffect, useMemo, useState } from "react";
import { tokenPair } from "util/constants";
import { parseAmount } from "util/convertValue";
import HistoryTable from "./HistoryTable";

const API = "https://api.thegraph.com/subgraphs/name/dungcui/flaex";

const orderQueryFunc = (token0Address: string, token1Address: string) => `
query MyQuery {
  orders(first: 10, where: {trader: "0xcf9f977eBa70E819EAf6eD5eE8E2EF6860c0D646", baseToken_in: ["${token0Address}","${token1Address}"], quoteToken_in: ["${token0Address}","${token1Address}"]}) {
    marginLevel
    quoteToken
    quoteTokenAmount
    trader
    baseTokenAmount
    baseToken
    baseMarginTokenAmount
    id
  }
}
`;

const BottomInfo = () => {
  // const tradeContext = useContextTrade();
  // const [tableData, setTableData] = useState<Array<ILongShortData>>([]);

  const { longShortData: tableData } = useLongShortData();

  return (
    <div className="mt-[20px] overflow-auto	">
      <HistoryTable titleRow={titleHistoryRow} data={tableData} />
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
              ? "text-flaex-green capitalize"
              : "text-flaex-red  capitalize"
          }`}
        >
          {data.direction}
        </div>
      );
    },
    classNameCustom: "text-left",
  },
  { title: "Leverage", field: "marginLevel" },
  {
    title: "Collateral",
    field: (data: any) => {
      return (
        <div className="whitespace-nowrap">{`${data.baseTokenAmount} ${
          data.direction.toLowerCase() === "long" ? "ETH" : "DAI"
        }`}</div>
      );
    },
  },
  // { title: "Collateral", field: "baseTokenAmount" },
  { title: "Debt", field: "quoteTokenAmount" },
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
          {`${data.pnlPercent} %`}
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
