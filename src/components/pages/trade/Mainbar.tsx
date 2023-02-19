import { useContextTrade } from "context/TradeContext";
import useQuoter from "hooks/useQuote";
import "rc-slider/assets/index.css";
import { useMemo } from "react";
import { tokenPair } from "util/constants";
import CloseRepay from "./CloseRepay";
import LongShort from "./LongShort";

const Mainbar = () => {
  const { isShowLong } = useContextTrade();

  const { coupleTradeCoins } = useContextTrade();

  const { token0, token1, fee } = useMemo(() => {
    return tokenPair[coupleTradeCoins.origin || ""];
  }, [coupleTradeCoins]);

  const quotedAmountOut = useQuoter(token1, token0, 1, 18, 18, fee);

  return (
    <div className="rounded-[10px] border-[0.2px] h-full px-4 py-3">
      {isShowLong ? <LongShort price={quotedAmountOut} /> : <CloseRepay />}
    </div>
  );
};

export default Mainbar;
