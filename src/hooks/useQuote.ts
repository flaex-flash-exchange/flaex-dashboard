import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import Quoter from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { computePoolAddress } from "@uniswap/v3-sdk";
import { useCallback, useEffect, useState } from "react";

import { Token } from "@uniswap/sdk-core";
import { Provider } from "@wagmi/core";
import { Decimal } from "decimal.js";
import { BigNumber, ethers } from "ethers";
import { useBlockNumber, useProvider } from "wagmi";
const READABLE_FORM_LEN = 4;

export function fromReadableAmount(amount: number, decimals: number): string {
  return new Decimal(amount).mul(new Decimal(10).pow(decimals)).toHex();
}

export function toReadableAmount(
  rawAmount: BigNumber,
  decimals: number,
): string {
  return new Decimal(rawAmount._hex)
    .div(new Decimal(10).pow(18))
    .toFixed(READABLE_FORM_LEN);
}

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

const useQuoter = (
  tokenIn: Token,
  tokenOut: Token,
  amountIn: number = 1,
  tokenInDecimals: number,
  tokenOuntDecimals: number,
  fee: number,
) => {
  const [quotedAmountOut, setQuotedAmountOut] = useState("");
  const provider = useProvider();
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });

  const fetchQuotedAmountOut = useCallback(async () => {
    const quoterContract = new ethers.Contract(
      QUOTER_CONTRACT_ADDRESS,
      Quoter.abi,
      provider,
    );
    const hexAmountIn = fromReadableAmount(amountIn, tokenInDecimals);

    const result = await quoterContract.callStatic.quoteExactInputSingle(
      tokenIn.address,
      tokenOut.address,
      fee,
      hexAmountIn,
      0,
    );

    const quotedAmount = toReadableAmount(result, tokenOuntDecimals);
    setQuotedAmountOut(quotedAmount);
  }, [
    amountIn,
    fee,
    provider,
    tokenIn,
    tokenInDecimals,
    tokenOuntDecimals,
    tokenOut,
  ]);

  useEffect(() => {
    fetchQuotedAmountOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNumber]);

  return quotedAmountOut;
};

export default useQuoter;

export async function getPoolConstants(
  _provider: Provider,
  _tokenIn: Token,
  _tokenOut: Token,
  _fee: number,
) {
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
