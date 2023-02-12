import React from "react";

const AmountInvest = () => {
  return (
    <div className="bg-border-transparent-flaex p-2.5">
      <div className="py-2.5 px-3 bg-flaex-border bg-opacity-5 rounded-[10px]">
        <div className="text-[12px] md:text-[14px] font-normal">
          Amount (USDC)
        </div>
        <div className="text-[14px] md:text-[16px] font-bold">1,000</div>
        <div className="text-[12px] md:text-[14px] font-light">
          Max: 44,698.78
        </div>
      </div>
      <div className="mt-[7px]">
        <button className="button-primary">Invest</button>
      </div>
    </div>
  );
};

export default AmountInvest;
