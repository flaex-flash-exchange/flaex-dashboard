import { Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import BottomInfo from "components/pages/trade/BottomInfo";
import Mainbar from "components/pages/trade/Mainbar";
import Topbar from "components/pages/trade/Topbar";
import TradingViewWidget from "components/pages/trade/TradingViewWidget";
import { TradeContextProvider } from "context/TradeContext";
import useQuoter from "hooks/useQuote";
import type { NextPage } from "next";
import { useNetwork } from "wagmi";

const Index: NextPage = () => {

  // const { chain } = useNetwork();
  const tokenIn = new Token(
    5 ,
    "0x1D2708636EA8E69f8c3766B973be331D175172aB",
    18,
    "WETH",
    "Wrapped Ether",
  );

  const tokenOut = new Token(
    5 ,
    "0x61D6aF87F88dd282b07eA7E1de69e27C6ac18Adb",
    18,
    "Dai",
    "Dai",
  );

  const quote = useQuoter(tokenIn,tokenOut,7,18,18,FeeAmount.LOWEST);
  const entryPrice = useQuoter(tokenIn,tokenOut,7,18,18,FeeAmount.LOWEST);

  

  return (
    <>
      <TradeContextProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 xl:grid-cols-7 2xl:grid-cols-7 gap-3">
          <div className="col-span-5 flex flex-col justify-center">
            <Topbar
              amount={1227.5}
              currency={1226.9}
              change={-4.59}
              high={1226.9}
              low={1226.9}
            />
            <div className="mt-2 border rounded h-full">
              <TradingViewWidget />
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2 xl:col-span-2 2xl:col-span-2 h-full">
            <Mainbar />
          </div>
        </div>
        <BottomInfo />
      </TradeContextProvider>
    </>
  );
};

export default Index;
