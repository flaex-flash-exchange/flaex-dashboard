import { ILongShortData } from "constants/interface";
import { useCallback, useEffect, useState, useMemo } from "react";

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import { parseAmount } from "util/convertValue";
import { useContextTrade } from "context/TradeContext";
import { tokenPair } from "util/constants";
import useQuoter from "./useQuote";

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

export const useLongShortData = () => {
  const [longShortData, setLongShortData] = useState<Array<ILongShortData>>([]);

  const { token0, token1, fee } = tokenPair["wETH/DAI"];

  const orderQuery = orderQueryFunc(token0.address, token1.address);

  const quotedAmountOut = useQuoter(
    token1,
    token0,
    1,
    token0.decimals,
    token1.decimals,
    fee,
  );

  const fetchLongShortData = useCallback(async () => {
    try {
      console.log("fetchLongShortData");

      const client = new ApolloClient({
        uri: API,
        cache: new InMemoryCache(),
      });

      const { data } = await client.query({
        query: gql(orderQuery),
      });

      if (data && data?.orders) {
        const onMappingAmount = data?.orders?.map(
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
              baseTokenAmount: parseAmount(
                BigNumber.from(item?.baseTokenAmount),
              ),
              quoteTokenAmount: parseAmount(
                BigNumber.from(item?.quoteTokenAmount),
              ),
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

        if (onMappingAmount) {
          setLongShortData(onMappingAmount);
        }
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }, [orderQuery, quotedAmountOut]);

  useEffect(() => {
    fetchLongShortData();
  }, [fetchLongShortData]);

  return {
    fetchLongShortData,
    longShortData,
  };
};
