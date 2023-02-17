import { useState, useEffect } from "react";
import { computePoolAddress, FeeAmount } from "@uniswap/v3-sdk";
import Quoter from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";

import { SupportedChainId, Token } from "@uniswap/sdk-core";
import { BigNumber, ethers, providers } from "ethers";

const READABLE_FORM_LEN = 4;

export function fromReadableAmount(
  amount: number,
  decimals: number,
): BigNumber {
  return ethers.utils.parseUnits(amount.toString(), decimals);
}

export function toReadableAmount(rawAmount: number, decimals: number): string {
  return ethers.utils
    .formatUnits(rawAmount, decimals)
    .slice(0, READABLE_FORM_LEN);
}

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

// Currencies and Tokens

export const WETH_TOKEN = new Token(
  SupportedChainId.MAINNET,
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  18,
  "WETH",
  "Wrapped Ether",
);

export const USDC_TOKEN = new Token(
  SupportedChainId.MAINNET,
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  6,
  "USDC",
  "USD//C",
);
export interface ExampleConfig {
  rpc: {
    local: string;
    mainnet: string;
  };
  tokens: {
    in: Token;
    amountIn: number;
    out: Token;
    poolFee: number;
  };
}

export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: "",
    mainnet: "",
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
};

// Provider Functions

export function getProvider(): providers.Provider {
  return new ethers.providers.JsonRpcProvider(CurrentConfig.rpc.mainnet);
}

const useQuoter = () => {
  const [quotedAmountOut, setQuotedAmountOut] = useState("");

  useEffect(() => {
    const fetchQuotedAmountOut = async () => {
      const quoterContract = new ethers.Contract(
        QUOTER_CONTRACT_ADDRESS,
        Quoter.abi,
        getProvider(),
      );
      const poolConstants = await getPoolConstants();

      const amountIn = fromReadableAmount(
        CurrentConfig.tokens.amountIn,
        CurrentConfig.tokens.in.decimals,
      ).toString();

      const result = await quoterContract.callStatic.quoteExactInputSingle(
        poolConstants.token0,
        poolConstants.token1,
        poolConstants.fee,
        amountIn,
        0,
      );

      const quotedAmount = toReadableAmount(
        result,
        CurrentConfig.tokens.out.decimals,
      );
      setQuotedAmountOut(quotedAmount);
    };
    fetchQuotedAmountOut();
  }, []);

  async function getPoolConstants() {
    const currentPoolAddress = computePoolAddress({
      factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
      tokenA: CurrentConfig.tokens.in,
      tokenB: CurrentConfig.tokens.out,
      fee: CurrentConfig.tokens.poolFee,
    });

    const poolContract = new ethers.Contract(
      currentPoolAddress,
      IUniswapV3PoolABI.abi,
      getProvider(),
    );
    const [token0, token1, fee] = await Promise.all([
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
    ]);

    return {
      token0,
      token1,
      fee,
    };
  }

  return { quotedAmountOut };
};

export default useQuoter;
