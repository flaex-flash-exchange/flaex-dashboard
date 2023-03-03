import { Token } from "@uniswap/sdk-core";
import { PairCrypto } from "constants/typeData";

export const mockData: PairCrypto[] = [
  { firstCoin: "ETH", secondCoin: "USDC" },
  { firstCoin: "BTC", secondCoin: "USDC" },
  { firstCoin: "BTC", secondCoin: "ETH" },
];

export enum FeeAmount {
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}


export const genesisTime = 1677828468000;
export enum Shippaple {
  LOW = 0.005,
  MEDIUM = 0.01,
  HIGH = 0.1,
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
      "DAI",
      "DAI",
    ),
    fee: FeeAmount.MEDIUM,
  },
  // "BTC/USDC": 1,
  // "BTC/ETH": 2,
};

export const eventLogs = {
  ORDER_OPEN: "OrderOpened",
  REPAY: "repayPartialDebt",
  ORDER_CLOSE: "OrderClosed",
  ASSET_PROVIDED: "AssetProvided",
  ASSET_WITHDRAWN: "assetWithdrawn",
  YIELD_CLAIMED: "yieldClaimed",
  TRANSFER: "Transfer",
  SWAP: "Swap",
};
export const argNames = {
  BASE_TOKEN_AMOUNT: "baseTokenAmount",
};
