import AntSelect from "components/common/AntCommon/AntSelect";
import { TCoupleCoin } from "constants/interface";
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
  const { setCoupleTradeCoins } = useContextTrade();

  const onSelectCouple = (item: string) => {
    const [before, after] = splitStringOnSlash(item);
    setCoupleTradeCoins((prev: TCoupleCoin) => ({
      ...prev,
      base: before,
      quote: after,
      origin: item,
    }));
  };
  return (
    <div className="grid grid-cols-6 border-flaex-border-table items-center rounded-[10px] border-[0.6px] px-5 py-2">
      <div className="col-span-2 h-ful w-10/12 z-10">
        {/* <DropdownCoin data={mockData} /> */}
        <AntSelect onSelection={onSelectCouple} />
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
