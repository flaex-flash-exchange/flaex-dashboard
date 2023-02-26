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

const BottomInfo = () => {
  // const tradeContext = useContextTrade();
  // const [tableData, setTableData] = useState<Array<ILongShortData>>([]);
  const { fetchLongShortData, longShortData: tableData } = useLongShortData();
  const { pairCrypto } = useContextTrade();

  const { token0, token1, fee } = useMemo(() => {
    return tokenPair[pairCrypto.origin || ""];
  }, [pairCrypto]);

  const quotedAmountOut = useQuoter(
    token1,
    token0,
    1,
    token0.decimals,
    token1.decimals,
    fee,
  );

  useEffect(() => {
    fetchLongShortData();
  }, [fetchLongShortData]);

  const longShortHistory = tableData?.map(
    (item: ILongShortData, idx: number) => {
      const isLong = idx === 0;
      const entryPriceParser = isLong
        ? new Decimal(item?.quoteTokenAmount)
            .div(
              new Decimal(item?.baseMarginTokenAmount).mul(
                new Decimal(item?.marginLevel).div(10000),
              ),
            )
            .toNumber()
        : new Decimal(item?.baseMarginTokenAmount)
            .mul(new Decimal(item?.marginLevel).div(10000))
            .div(new Decimal(item?.quoteTokenAmount))
            .toNumber();

      const markPriceParser = isLong
        ? quotedAmountOut.priceExactInputToken0
        : quotedAmountOut.priceExactOutputToken1;

      const pnlPercent = isLong
        ? new Decimal(markPriceParser)
            .div(new Decimal(entryPriceParser))
            .minus(1)
            .mul(new Decimal(new Decimal(item?.marginLevel).div(100)))
            .toFixed(2)
        : new Decimal(entryPriceParser)
            .div(new Decimal(markPriceParser))
            .minus(1)
            .mul(new Decimal(new Decimal(item?.marginLevel).div(100)))
            .toFixed(2);

      const liquidatePrice = isLong
        ? new Decimal(1.1)
            .mul(
              new Decimal(item?.quoteTokenAmount).div(
                new Decimal(item?.baseTokenAmount),
              ),
            )
            .toFixed(4)
        : new Decimal(1)
            .div(
              new Decimal(1.1).mul(
                new Decimal(item?.quoteTokenAmount).div(
                  new Decimal(item?.baseTokenAmount),
                ),
              ),
            )
            .toFixed(4);

      return {
        ...item,
        baseMarginTokenAmount: parseAmount(
          BigNumber.from(item?.baseMarginTokenAmount),
        ),
        baseTokenAmount: parseAmount(BigNumber.from(item?.baseTokenAmount)),
        quoteTokenAmount: parseAmount(BigNumber.from(item?.quoteTokenAmount)),
        direction: isLong ? "long" : "short",
        marginLevel: new Decimal(item?.marginLevel).div(100).toNumber(),
        entryPrice: entryPriceParser,
        markPrice: markPriceParser,
        liquidPrice: liquidatePrice,
        marginRatio: isLong
          ? new Decimal(item.baseTokenAmount)
              .mul(new Decimal(markPriceParser))
              .div(new Decimal(item?.quoteTokenAmount))
              .toNumber()
          : new Decimal(item.baseTokenAmount)
              .div(
                new Decimal(item?.quoteTokenAmount).mul(
                  new Decimal(markPriceParser),
                ),
              )
              .toNumber(),
        pnlPercent,
        isLong,
      };
    },
  );

  return (
    <div className="mt-[20px] overflow-auto	">
      <HistoryTable titleRow={titleHistoryRow} data={longShortHistory} />
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
