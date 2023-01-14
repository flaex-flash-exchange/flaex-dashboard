import BottomInfo from "components/pages/trade/BottomInfo";
import Mainbar from "components/pages/trade/Mainbar";
import Topbar from "components/pages/trade/Topbar";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-7 gap-5">
        <div className="col-span-5">
          <Topbar
            amount={1227.5}
            currency={1226.9}
            change={-4.59}
            high={1226.9}
            low={1226.9}
          />
          <div>
            <img
              src="/images/trade/chart_img.png"
              alt="flaex"
              className="w-full mt-2"
            />
          </div>
        </div>

        <div className="col-span-2 h-full">
          <Mainbar />
        </div>
      </div>

      <BottomInfo />
    </>
  );
};

export default Index;
