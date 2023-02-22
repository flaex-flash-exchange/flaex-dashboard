import { Token } from "@uniswap/sdk-core";
import { CoupleCoin } from "constants/typeData";

export const mockData: CoupleCoin[] = [
  { firstCoin: "ETH", secondCoin: "USDC" },
  { firstCoin: "BTC", secondCoin: "USDC" },
  { firstCoin: "BTC", secondCoin: "ETH" },
];

export enum FeeAmount {
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}
export enum S_LONG_SHORT_TYPE {
  LONG = "LONG",
  SHORT = "SHORT",
}

export const mockSelectCoins = [
  {
    label: "wETH/DAI",
    value: "wETH/DAI",
  },
  // {
  //   label: "BTC/USDC",
  //   value: "BTC/USDC",
  // },
  // {
  //   label: "BTC/ETH",
  //   value: "BTC/ETH",
  // },
];

export const LSBtn = {
  LONG: "Long",
  SHORT: "Short",
};

export const tokenPair: any = {
  "wETH/DAI": {
    token0: new Token(
      5,
      "0x1D2708636EA8E69f8c3766B973be331D175172aB",
      18,
      "WETH",
      "Wrapped Ether",
    ),
    token1: new Token(
      5,
      "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
      18,
      "Dai",
      "Dai",
    ),
    fee: FeeAmount.MEDIUM,
  },
  // "BTC/USDC": 1,
  // "BTC/ETH": 2,
};
