import { CoupleCoin } from "constants/typeData";

export const mockData: CoupleCoin[] = [
  { firstCoin: "ETH", secondCoin: "USDC" },
  { firstCoin: "BTC", secondCoin: "USDC" },
  { firstCoin: "BTC", secondCoin: "ETH" },
];

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
