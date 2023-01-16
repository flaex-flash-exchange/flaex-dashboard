import React, { createContext, useContext, useState } from "react";

export const TradeContext = createContext<any>({});
export const TradeContextProvider = ({ children }: any) => {
  const [isShowLong, setIsShowLong] = useState<boolean | undefined>(undefined);
  const value = { isShowLong, setIsShowLong };

  console.log("isShowLong", isShowLong);
  return (
    <TradeContext.Provider value={value}>{children}</TradeContext.Provider>
  );
};

export const useContextTrade = () => useContext(TradeContext);
