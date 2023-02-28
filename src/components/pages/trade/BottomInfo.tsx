import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { validateAndParseAddress } from "@uniswap/sdk-core";
import { IBottomProps, ILongShortData } from "constants/interface";
import { useContextTrade } from "context/TradeContext";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import { useLongShortData } from "hooks/useLongShortData";
// import { useLongShortData } from "hooks/useLongShortData";
import useQuoter from "hooks/useQuote";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BigNumberToReadableAmount } from "util/commons";
import { tokenPair } from "util/constants";
import { parseAmount } from "util/convertValue";
import { Address } from "wagmi";
import HistoryTable from "./HistoryTable";

const BottomInfo = ({ tableData }: { tableData: Array<ILongShortData> }) => {
  const { pairCrypto } = useContextTrade();
  const { setRepayCloseData, repayCloseData } = useContextTrade();

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

  const longShortHistory = useMemo(() => {
    return tableData?.map((item: ILongShortData, idx: number) => {
      const isLong =
        validateAndParseAddress(item.baseToken) ==
        validateAndParseAddress(token0.address);

      const entryPriceParser = isLong
        ? new Decimal(item?.quoteTokenAmount)
            .div(
              new Decimal(item?.baseMarginTokenAmount).mul(
                new Decimal(item?.marginLevel).div(10000),
              ),
            )
            .toFixed(4)
        : new Decimal(item?.baseMarginTokenAmount)
            .mul(new Decimal(item?.marginLevel).div(10000))
            .div(new Decimal(item?.quoteTokenAmount))
            .toFixed(4);
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
        baseTokenAmount: isLong
          ? BigNumberToReadableAmount(
              BigNumber.from(item?.baseTokenAmount),
              token0.decimals,
            )
          : BigNumberToReadableAmount(
              BigNumber.from(item?.baseTokenAmount),
              token1.decimals,
            ),
        quoteTokenAmount: isLong
          ? BigNumberToReadableAmount(
              BigNumber.from(item?.quoteTokenAmount),
              token1.decimals,
            )
          : BigNumberToReadableAmount(
              BigNumber.from(item?.quoteTokenAmount),
              token0.decimals,
            ),
        direction: isLong ? "long" : "short",
        marginLevel: new Decimal(item?.marginLevel).div(100).toNumber(),
        token0: isLong? token0.symbol : token1.symbol,
        token1: isLong? token1.symbol: token0.symbol,
        entryPrice: entryPriceParser,
        markPrice: markPriceParser,
        liquidPrice: liquidatePrice,
        marginRatio: isLong
          ? new Decimal(item.baseTokenAmount)
              .mul(new Decimal(markPriceParser))
              .div(new Decimal(item?.quoteTokenAmount))
              .toFixed(4)
          : new Decimal(item.baseTokenAmount)
              .div(
                new Decimal(item?.quoteTokenAmount).mul(
                  new Decimal(markPriceParser),
                ),
              )
              .toFixed(4),
        pnlPercent,
        isLong,
      };
    });
  }, [
    quotedAmountOut.priceExactInputToken0,
    quotedAmountOut.priceExactOutputToken1,
    tableData,
    token0.address,
  ]);

  useEffect(() => {
    if (repayCloseData?.isLong) {
      setRepayCloseData(longShortHistory.find((data) => data.isLong));
    } else {
      setRepayCloseData(longShortHistory.find((data) => !data.isLong));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData]);

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
  {
    title: "Leverage",
    field: (data: any) => {
      return (
        <div className="whitespace-nowrap">{`${data.marginLevel} %`}</div>
      );
    },
  },
  {
    title: "Collateral",
    field: (data: any) => {
      return (
        <div className="whitespace-nowrap">{`${data.baseTokenAmount} ${
          data.direction.toLowerCase() === "long" ? data.token0 : data.token1
        }`}</div>
      );
    },
  },
  // { title: "Collateral", field: "baseTokenAmount" },
  { title: "Debt", field: (data: any) => {
    return (
      <div className="whitespace-nowrap">{`${data.quoteTokenAmount} ${
        data.direction.toLowerCase() === "long" ? data.token1 : data.token0
      }`}</div>
    );
  }, },
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
