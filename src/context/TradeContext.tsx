import { TCoupleCoin } from "constants/interface";
import React, { createContext, useContext, useState } from "react";

interface ITradeContext {
  coupleTradeCoins: TCoupleCoin;
  isShowLong: boolean | undefined;
  repayClodeData: any | undefined;
  setIsShowLong: (item: any) => void;
  setRepayClodeData: (item: any) => void;
  setCoupleTradeCoins: (item: any) => void;
}
export const TradeContext = createContext<ITradeContext | null>(null);
export const TradeContextProvider = ({ children }: any) => {
  const [isShowLong, setIsShowLong] = useState<boolean>(true);
  const [coupleTradeCoins, setCoupleTradeCoins] = useState<TCoupleCoin>({
    base: "wETH",
    quote: "DAI",
    origin: "wETH/DAI",
  });
  const [repayClodeData, setRepayClodeData] = useState<any>(null);

  return (
    <TradeContext.Provider
      value={{
        isShowLong,
        setIsShowLong,
        repayClodeData,
        coupleTradeCoins,
        setCoupleTradeCoins,
        setRepayClodeData,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export const useContextTrade = () => useContext(TradeContext) as ITradeContext;
