import { ILongShortData } from "constants/interface";
import { useCallback, useEffect, useState, useMemo } from "react";

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import { parseAmount } from "util/convertValue";
import { useContextTrade } from "context/TradeContext";
import { tokenPair } from "util/constants";
import useQuoter from "./useQuote";
import { useAccount } from "wagmi";

const API = "https://api.thegraph.com/subgraphs/name/dungcui/flaex";

const orderQueryFunc = (address: string, token0Address: string, token1Address: string) => `
query MyQuery {
  orders(first: 10, where: {trader: "${address}", baseToken_in: ["${token0Address}","${token1Address}"], quoteToken_in: ["${token0Address}","${token1Address}"]}) {
    marginLevel
    quoteToken
    quoteTokenAmount
    trader
    baseTokenAmount
    baseToken
    baseMarginTokenAmount
    id
    entryPrice
  }
}
`;

export const useLongShortData = () => {
  const [longShortData, setLongShortData] = useState<Array<ILongShortData>>([]);

  const { pairCrypto } = useContextTrade();
  const { address } = useAccount();
  const { token0, token1, fee } = useMemo(() => {
    return tokenPair[pairCrypto.origin || "wETH/DAI"];
  }, [pairCrypto]);

  const orderQuery = orderQueryFunc(address as string, token0.address, token1.address);

  const fetchLongShortData = useCallback(async () => {
    try {
      if (!token0 ||  !token1 || !address) {
        return ;
      } else {
        const client = new ApolloClient({
          uri: API,
          cache: new InMemoryCache({resultCaching:false}),
        });

        const { data } = await client.query({
          query: gql(orderQuery),
        });

        if (data && data?.orders) {
          setLongShortData(data?.orders?.flat());
        }
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }, [address, orderQuery, token0, token1]);



  return {
    fetchLongShortData,
    longShortData,
  };
};
