import AntSelect from "components/common/AntCommon/AntSelect";
import { TPairCrypto } from "constants/interface";
import { useContextTrade } from "context/TradeContext";
// import DropdownCoin from "components/common/DropdownCoin";
import React from "react";
import { splitStringOnSlash } from "util/commons";
import { convertCurrency } from "util/convertValue";

type ITopBar = {
  amount: number;
  currency: number;
  change: number;
  high: number;
  low: number;
};

const Topbar = ({ amount, currency, change, high, low }: ITopBar) => {
  const { setPairCrypto } = useContextTrade();

  const onSelectPairCrypto = (item: string) => {
    const [before, after] = splitStringOnSlash(item);
    setPairCrypto((prev: TPairCrypto) => ({
      ...prev,
      base: before,
      quote: after,
      origin: item,
    }));
  };
  return (
    <div className="grid grid-cols-6 border-flaex-border-table items-center rounded-[10px] border-[0.6px] px-2 py-2 md:px-5 md:py-2 lg:px-5 lg:py-2 xl:px-5 xl:py-2 2xl:px-5 2xl:py-2 ">
      <div className="col-span-2 h-ful w-10/12 z-10">
        {/* <DropdownCoin data={mockData} /> */}
        <AntSelect
          optionStyle={{
            fontSize: 22,
            fontWeight: 600,
          }}
          width={220}
          _onhandleselection={onSelectPairCrypto}
        />
      </div>

      <div className="text-center">
        <div className="text-base font-semibold">{amount}</div>
        <div className="text-sm font-light">{convertCurrency(currency)}</div>
      </div>

      <div className="text-center">
        <div className="text-sm font-light">24h Change</div>
        <div
          className={`${
            change > 0 ? "text-flaex-green" : "text-flaex-red"
          } text-base font-semibold`}
        >
          {change}%
        </div>
      </div>

      <div className="text-center">
        <div className="text-sm font-light">24h High</div>
        <div className="text-base font-semibold">{convertCurrency(high)}</div>
      </div>

      <div className="text-center">
        <div className="text-sm font-light">24h Low</div>
        <div className="text-base font-semibold">{convertCurrency(low)}</div>
      </div>
    </div>
  );
};

export default Topbar;
