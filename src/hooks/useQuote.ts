import { useState, useEffect } from "react";
import { computePoolAddress, FeeAmount } from "@uniswap/v3-sdk";
import Quoter from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";

import { SupportedChainId, Token } from "@uniswap/sdk-core";
import { BigNumber, ethers, providers } from "ethers";
import { useProvider } from "wagmi";
import { Provider } from "@wagmi/core";
import { Decimal } from "decimal.js";
const READABLE_FORM_LEN = 4;

export function fromReadableAmount(
  amount: number,
  decimals: number,
): string {
  return new Decimal(amount).mul(new Decimal(10).pow(decimals)).toHex();
}

export function toReadableAmount(rawAmount: BigNumber, decimals: number): string {
  return new Decimal(rawAmount._hex).div(new Decimal(10).pow(18)).toFixed(4);
}

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";


const useQuoter = (tokenIn : Token, tokenOut : Token, amountIn : number, tokenInDecimals : number, tokenOuntDecimals : number, fee: number) => {
  const [quotedAmountOut, setQuotedAmountOut] = useState("");
  const provider = useProvider();

  useEffect(() => {
    const fetchQuotedAmountOut = async () => {
      const quoterContract = new ethers.Contract(
        QUOTER_CONTRACT_ADDRESS,
        Quoter.abi,
        provider,
      );
      const poolConstants = await getPoolConstants(provider,tokenIn, tokenOut, fee);

      const hexAmountIn = fromReadableAmount(
        amountIn,
        tokenInDecimals,
      );

      console.log("poolConstants.token0",poolConstants);

      const result = await quoterContract.callStatic.quoteExactInputSingle(
        poolConstants.token0,
        poolConstants.token1,
        poolConstants.fee,
        hexAmountIn,
        0,
      );


      const quotedAmount = toReadableAmount(
        result,
        tokenOuntDecimals,
      );
      setQuotedAmountOut(quotedAmount);
    };
    fetchQuotedAmountOut();
  }, []);

  async function getPoolConstants(_provider : Provider,_tokenIn: Token, _tokenOut: Token, _fee: number) {
    const currentPoolAddress = computePoolAddress({
      factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
      tokenA: _tokenIn,
      tokenB: _tokenOut,
      fee: _fee,
    });

    const poolContract = new ethers.Contract(
      currentPoolAddress,
      IUniswapV3PoolABI.abi,
      _provider,
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
