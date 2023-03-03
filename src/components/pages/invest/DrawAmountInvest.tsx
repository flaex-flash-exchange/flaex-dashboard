import BaseButton from "components/common/BaseButton";
import { contractAddress } from "constants/contractAddress";
import { FlaexInvest, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import React, { useCallback, useState } from "react";
import { amountToHex } from "util/commons";
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";

const DrawAmountInvest = () => {
  const [amount, setAmount] = useState<number> (0);
  const { address } = useAccount();
  const {data : balanceFlToken} = useContractRead({
    address:contractAddress.FlaexToken as `0x${string}`,
    abi: TestERC20.abi,
    functionName:"balanceOf",
    args:[address]
  });

  const handleChangeAmount = useCallback((e:any)=>{
    setAmount(Number(e.target.value));
  },[]);

  const { config: configWithdrawToken } = usePrepareContractWrite({
    address: contractAddress.FlaexInvestor as `0x${string}` ,
    abi: FlaexInvest.abi,
    functionName: "withdraw",
    args: [amountToHex(amount,18)],
    enabled : amount>0
  });

  const {
    data: withdrawData,
    isLoading: isWithdrawLoading,
    isSuccess: isWithdrawSuccess,
    write: withdrawFunc,
  } = useContractWrite(configWithdrawToken);

  const { isSuccess : isWithdrawSucess, isError: isWithdrawError } = useWaitForTransaction({
    hash: withdrawData?.hash,
    confirmations: 1,
  });

  const { config: configClaimToken } = usePrepareContractWrite({
    address: contractAddress.FlaexInvestor as `0x${string}` ,
    abi: FlaexInvest.abi,
    functionName: "claimYield",
    args: [amountToHex(amount,18)],
    enabled : amount>0
  });

  const {
    data: claimData,
    isLoading: isClaimLoading,
    isSuccess: isClaimSuccess,
    write: claimFunc,
  } = useContractWrite(configClaimToken);

  const { isSuccess : isClaimSucess, isError: isClaimError } = useWaitForTransaction({
    hash: claimData?.hash,
    confirmations: 1,
  });

  

  const txWithdrawDone = isWithdrawSucess|| isWithdrawError;
  const txClaimDone = isClaimSucess || isClaimError;
  return (
    <div className="bg-border-transparent-flaex p-2.5 flex flex-col justify-between">
      <div className="py-2.5 px-3 bg-flaex-border bg-opacity-5 rounded-[10px]">
        <div className="text-[12px] md:text-[14px] font-normal">
          Withdraw Amount (DAI)
        </div>
        <input
                className="bg-transparent outline-none"
                onChange={handleChangeAmount}
                value={amount}
                max={1000}
                type="number"
        />        
        <div className="text-[12px] md:text-[14px] font-light">
          Max: {new Decimal(balanceFlToken?(balanceFlToken as BigNumber)._hex : 0).div(new Decimal(10).pow(18)).toFixed(4)}
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between gap-2 mt-[7px] ">
        <BaseButton
              disabled={
                !claimFunc ||
                isClaimLoading ||
                (isClaimSuccess && !txClaimDone)
              }
              onButtonClick={() => claimFunc?.()}
              moreClass="col-span-1 button-primary"
            >
              {((!isClaimLoading &&
                !isClaimSuccess) || txClaimDone )&&
                `Claim`}
              {isClaimLoading && `Waiting for signing`}
              {isClaimSuccess && `Waiting for network`}
        </BaseButton>
        <BaseButton
              disabled={
                !withdrawFunc ||
                isWithdrawLoading ||
                (isWithdrawSuccess && !txWithdrawDone)
              }
              onButtonClick={() => withdrawFunc?.()}
              moreClass="col-span-2 button-primary"
            >
              {((!isWithdrawLoading &&
                !isWithdrawSuccess) || txWithdrawDone) &&
                `Withdraw & Claim`}
              {isWithdrawLoading && `Waiting for signing`}
              {isWithdrawSuccess && `Waiting for network`}
            </BaseButton>
      </div>
    </div>
  );
};

export default DrawAmountInvest;
