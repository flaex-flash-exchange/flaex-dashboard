import { TCoupleCoin } from "constants/interface";
import React, { createContext, useContext, useState } from "react";

interface ITradeContext {
  coupleTradeCoins: TCoupleCoin;
  isShowLong: boolean | undefined;
  setIsShowLong: (item: any) => void;
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

  return (
    <TradeContext.Provider
      value={{
        isShowLong,
        setIsShowLong,
        coupleTradeCoins,
        setCoupleTradeCoins,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export const useContextTrade = () => useContext(TradeContext) as ITradeContext;
