import React from "react";
export interface IConnectWalletBtn {
  extendClass?: string;
}

export type TPairCrypto = {
  base: string;
  quote: string;
  origin?: string;
};

export type IChildren = {
  children: React.ReactNode | string | JSX.Element | JSX.Element[];
};

export interface IBottomProps {
  onLongShortData?: (data: any) => void;
}
export interface ILongShortData {
  baseMarginTokenAmount: string | number;
  baseToken: string;
  baseTokenAmount: string | number;
  id: string;
  marginLevel: string | number;
  quoteToken: string;
  quoteTokenAmount: string | number;
  trader: string;
  entryPrice : string | number;
}
