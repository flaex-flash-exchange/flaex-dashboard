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
