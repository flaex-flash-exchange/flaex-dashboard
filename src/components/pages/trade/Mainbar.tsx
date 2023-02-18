import React, { useMemo } from "react";
import "rc-slider/assets/index.css";
import LongShort from "./LongShort";
import CloseRepay from "./CloseRepay";
import { useContextTrade } from "context/TradeContext";
import { tokenPair } from "util/constants";
import useQuoter from "hooks/useQuote";
import { useBlockNumber } from "wagmi";

const Mainbar = () => {
  const { isShowLong } = useContextTrade();

  const { coupleTradeCoins } = useContextTrade();

  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });
  console.log("test-blockNumber", blockNumber);

  const { token0, token1, fee } = useMemo(() => {
    return tokenPair[coupleTradeCoins.origin || ""];
  }, [coupleTradeCoins]);

  const quotedAmountOut = useQuoter(
    token0,
    token1,
    1,
    18,
    18,
    fee,
  );

  return (
    <div className="rounded-[10px] border-[0.2px] h-full px-4 py-3">
      {isShowLong === undefined ? (
        <LongShort price={quotedAmountOut} />
      ) : (
        <CloseRepay />
      )}
    </div>
  );
};

export default Mainbar;
