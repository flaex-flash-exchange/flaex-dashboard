import { PairCrypto } from "constants/typeData";
import { useOutSideClick } from "hooks/useOutSideClick";
import React, { useRef, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";

const DropdownCoin = ({
  isSearch = false,
  data,
}: {
  isSearch?: boolean;
  data: PairCrypto[];
}) => {
  const [selected, setSelected] = useState<PairCrypto>({
    firstCoin: "ETH",
    secondCoin: "USDC",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const componentRef = useOutSideClick(() => setIsOpen(false));

  return (
    <div ref={componentRef as any} className="relative h-full">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex text-2xl font-semibold items-center gap-2 px-2 h-full"
      >
        {Object.keys(selected).length > 0
          ? `${selected.firstCoin}/${selected.secondCoin}`
          : "Select chain"}
        <FaAngleDown />
      </div>

      <ul
        className={`${
          isOpen ? "max-h-60 border-[0.6px]" : "max-h-0"
        } absolute w-full translate-y-full -bottom-5 bg-[#002453] overflow-y-auto duration-100 rounded`}
      >
        {isSearch && (
          <div className="flex items-center gap-2 p-2">
            <FaSearch size={16} />
            <input
              type="text"
              placeholder="Enter your text..."
              className="outline-none bg-transparent"
            />
          </div>
        )}

        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className="p-2 cursor-pointer hover:text-flaex-primary duration-200"
            >
              {item.firstCoin}/{item.secondCoin}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownCoin;
