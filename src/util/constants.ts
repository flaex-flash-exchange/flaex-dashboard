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

export const mockSelectCoins = [
  {
    label: "ETH/USDC",
    value: "ETH/USDC",
  },
  {
    label: "BTC/USDC",
    value: "BTC/USDC",
  },
  {
    label: "BTC/ETH",
    value: "BTC/ETH",
  },
];

export const LSBtn = {
  LONG: "Long",
  SHORT: "Short",
};
