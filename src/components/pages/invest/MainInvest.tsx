import { contractAddress } from "constants/contractAddress";
import { FlaexInvest, FlaexVault } from "contracts";
import React from "react";
import { useContractRead } from "wagmi";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const MainInvest = () => {

  return (
    <div className="md:flex gap-8 mt-3.5 mb-6">
      <div className="flex-1">
        <LeftContent />
      </div>

      <div className="divider md:hidden" />
      <div className="flex-1">
        <RightContent />
      </div>
    </div>
  );
};

export default MainInvest;
