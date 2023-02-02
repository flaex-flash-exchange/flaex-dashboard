import React from "react";

const DrawAmountInvest = () => {
  return (
    <div className="bg-border-transparent-flaex p-2.5">
      <div className="py-2.5 px-3 bg-flaex-border bg-opacity-5 rounded-[10px]">
        <div className="text-[14px] font-normal">Withdraw Amount (USDC)</div>
        <div className="text-[16px] font-bold">1,000</div>
        <div className="text-[14px] font-light">Max: 7916.93</div>
      </div>
      <div className="flex justify-between gap-2 mt-[7px]">
        <button className="button-primary">Claim</button>
        <button className="button-primary">Withdraw & Claim</button>
      </div>
    </div>
  );
};

export default DrawAmountInvest;
