import React, { useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import SelectToken from "./SelectToken";

const MainMint = () => {
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="w-2/5 bg-border-flaex p-6">
      <div className="flex items-center w-full justify-between">
        <span className="font-medium text-[20px]">Swap</span>
        <button>
          <FaCog size={20} />
        </button>
      </div>

      <div className="bg-border-flaex p-6 mt-6 flex items-center justify-between">
        <input
          className="flex-1 w-full bg-transparent outline-none text-[20px] font-semibold"
          placeholder="0"
          type="text"
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
        />
        <div className="text-flaex-heading w-[100px]">
          <SelectToken />
        </div>
      </div>

      <button className="button-primary mt-10">Mint</button>
    </div>
  );
};

export default MainMint;
