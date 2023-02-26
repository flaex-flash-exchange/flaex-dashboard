import { TPairCrypto } from "constants/interface";
import React, { createContext, useContext, useState } from "react";

interface ITradeContext {
  pairCrypto: TPairCrypto;
  isShowLong: boolean | undefined;
  repayCloseData: any | undefined;
  setIsShowLong: (item: any) => void;
  setRepayCloseData: (item: any) => void;
  setPairCrypto: (item: any) => void;
}
export const TradeContext = createContext<ITradeContext | null>(null);
export const TradeContextProvider = ({ children }: any) => {
  const [isShowLong, setIsShowLong] = useState<boolean>(true);
  const [pairCrypto, setPairCrypto] = useState<TPairCrypto>({
    base: "wETH",
    quote: "DAI",
    origin: "wETH/DAI",
  });
  const [repayCloseData, setRepayCloseData] = useState<any>();

  return (
    <TradeContext.Provider
      value={{
        isShowLong,
        setIsShowLong,
        repayCloseData,
        pairCrypto,
        setPairCrypto,
        setRepayCloseData,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export const useContextTrade = () => useContext(TradeContext) as ITradeContext;
