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
  baseMarginTokenAmount: string;
  baseToken: string;
  baseTokenAmount: string;
  id: string;
  marginLevel: string;
  quoteToken: string;
  quoteTokenAmount: string;
  trader: string;
}
