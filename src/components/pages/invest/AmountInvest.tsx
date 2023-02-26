import React, { useCallback, useState } from "react";

const AmountInvest = () => {

  const [amount, setAmount] = useState<number> ();

  const handleChangeAmount = useCallback((e:any)=>{
    setAmount(Number(e.target.value));
  },[]);
  return (
    <div className="bg-border-transparent-flaex p-2.5">
      <div className="py-2.5 px-3 bg-flaex-border bg-opacity-5 rounded-[10px]">
        <div className="text-[12px] md:text-[14px] font-normal">
          Amount (USDC)
        </div>
        <input
                className="bg-transparent outline-none"
                onChange={handleChangeAmount}
                value={amount}
                max={1000}
                type="number"
        />        
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
