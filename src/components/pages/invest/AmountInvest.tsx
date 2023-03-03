import BaseButton from "components/common/BaseButton";
import { contractAddress } from "constants/contractAddress";
import { FlaexInvest, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { BigNumber, constants, Contract } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import { amountToHex, BigNumberToReadableAmount } from "util/commons";
import { useAccount, useProvider, usePrepareContractWrite ,useContractWrite, useWaitForTransaction } from "wagmi";
const AmountInvest = ({balance}:{balance:any}) => {
  const [amount, setAmount] = useState<number> (0);
  const { address }= useAccount();
  const [isApproved, setIsApproved] = useState<boolean> (true);
  const provider = useProvider();
  const fetchAllowance = useCallback(async() =>{
    const contract = new Contract(contractAddress.DAI,TestERC20.abi,provider);
    if(!contract){
      return ;
    } else {
      const allowance = await contract.allowance(address,contractAddress.FlaexInvestor);
      if(new Decimal(allowance._hex || 0).lessThanOrEqualTo(0)){
        setIsApproved(false);
      }
    }
  },[address, provider]);

  const { config: configApprovalToken } = usePrepareContractWrite({
    address: contractAddress.DAI as `0x${string}` ,
    abi: TestERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexInvestor, constants.MaxUint256],
  });

  const {
    data: approvalTokenData,
    isLoading: isApprovalLoading,
    isSuccess: isApprovalSuccess,
    write: approvalTokenFunc,
  } = useContractWrite(configApprovalToken);

  useWaitForTransaction({
    hash: approvalTokenData?.hash,
    confirmations: 1,
    onSuccess() {
      setIsApproved(true);
    },
  });

  const { config: configInvestToken } = usePrepareContractWrite({
    address: contractAddress.FlaexInvestor as `0x${string}` ,
    abi: FlaexInvest.abi,
    functionName: "provide",
    args: [amountToHex(amount,18)],
    enabled : amount>0
  });

  const {
    data: investTokenData,
    isLoading: isInvestLoading,
    isSuccess: isInvestSuccess,
    write: investFunc,
  } = useContractWrite(configInvestToken);

  const {isSuccess, isError} = useWaitForTransaction({
    hash: investTokenData?.hash,
    confirmations: 1,
    onSuccess() {
      console.log("invest success");
    },
  });

  const txInvestDone = isSuccess|| isError;



  const handleChangeAmount = useCallback((e:any)=>{
    setAmount(Number(e.target.value));
  },[]);

  useEffect(()=>{
    fetchAllowance();
  },[fetchAllowance]);


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
          Max: {BigNumberToReadableAmount(balance,18)}
        </div>
      </div>
      <div className="mt-[7px]">
        {!isApproved && (
          <BaseButton
              disabled={
                !approvalTokenFunc ||
                isApprovalLoading ||
                isApprovalSuccess 
              }
              onButtonClick={() => approvalTokenFunc?.()}
              moreClass="col-span-2 button-primary"
            >
              {!isApprovalLoading &&
                !isApprovalSuccess &&
                `Approval DAI`}
              {isApprovalLoading && `Waiting for signing`}
              {isApprovalSuccess && `Waiting for network`}
            </BaseButton>
        )}

        {isApproved && (
          <BaseButton
              disabled={
                !investFunc ||
                isInvestLoading ||
                (isInvestSuccess && !txInvestDone)
              }
              onButtonClick={() => investFunc?.()}
              moreClass="col-span-2 button-primary"
            >
              {((!isInvestLoading &&
                !isInvestSuccess ) || txInvestDone ) &&
                `Invest`}
              {isInvestLoading && `Waiting for signing`}
              {(isInvestSuccess && !txInvestDone) && `Waiting for network`}
            </BaseButton>
        )}
       
      </div>
    </div>
  );
};

export default AmountInvest;
