import BottomInfo from "components/pages/trade/BottomInfo";
import Mainbar from "components/pages/trade/Mainbar";
import Topbar from "components/pages/trade/Topbar";
import TradingViewWidget from "components/pages/trade/TradingViewWidget";
import { TradeContextProvider } from "context/TradeContext";
import type { NextPage } from "next";
import styled from "styled-components";
import { useBlockNumber } from "wagmi";

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
        <BlockNumberView />
      </TradeContextProvider>
    </>
  );
};

export default Index;

const BlockNumberView = () => {
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });
  return blockNumber ? (
    <div style={{ position: "fixed", bottom: 20, right: 30 }}>
      <WrappBlockNumber>
        <span
          style={{
            padding: "8px 8px 8px 15px",
          }}
        >
          {blockNumber}
        </span>
      </WrappBlockNumber>
    </div>
  ) : null;
};

const WrappBlockNumber = styled.div`
  color: whitesmoke;
  font-size: 14px;
  background-color: #151924;
  border-radius: 5px;
  &::after {
    content: "";
    width: 7px;
    height: 7px;
    position: absolute;
    top: 0;
    left: 3px;
    bottom: 0;
    background-color: green;
    border-radius: 100%;
    margin: auto 0;
  }
`;
