import { TCoupleCoin } from "constants/interface";
import React, { createContext, useContext, useState } from "react";

export const TradeContext = createContext<any>({});
export const TradeContextProvider = ({ children }: any) => {
  const [isShowLong, setIsShowLong] = useState<boolean | undefined>(undefined);
  const [coupleTradeCoins, setCoupleTradeCoins] = useState<TCoupleCoin>({
    base: "BTC",
    quote: "USDC",
    origin: "BTC/USDC",
  });
  const value = {
    isShowLong,
    setIsShowLong,
    coupleTradeCoins,
    setCoupleTradeCoins,
  };

  return (
    <TradeContext.Provider value={value}>{children}</TradeContext.Provider>
  );
};

export const useContextTrade = () => useContext(TradeContext);
