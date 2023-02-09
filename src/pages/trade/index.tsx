import BottomInfo from "components/pages/trade/BottomInfo";
import Mainbar from "components/pages/trade/Mainbar";
import Topbar from "components/pages/trade/Topbar";
import TradingViewWidget from "components/pages/trade/TradingViewWidget";
import { TradeContextProvider } from "context/TradeContext";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      <TradeContextProvider>
        <div className="grid grid-cols-7 gap-5">
          <div className="col-span-5 flex flex-col justify-center">
            <Topbar
              amount={1227.5}
              currency={1226.9}
              change={-4.59}
              high={1226.9}
              low={1226.9}
            />
            <div className="h-full mt-2 border rounded">
              {/* <img
                src="/images/trade/chart_img.png"
                alt="flaex"
                className="w-full mt-2"
              /> */}
              <TradingViewWidget />
            </div>
          </div>

          <div className="col-span-2 h-full">
            <Mainbar />
          </div>
        </div>

        <BottomInfo />
      </TradeContextProvider>
    </>
  );
};

export default Index;
