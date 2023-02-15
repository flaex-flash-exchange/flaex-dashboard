import React from "react";
export interface IConnectWalletBtn {
  extendClass?: string;
}

export type TCoupleCoin = {
  base: string;
  quote: string;
  origin?: string;
};

export type IChildren = {
  children: React.ReactNode | string | JSX.Element | JSX.Element[];
};
