import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { contractAddress } from "constants/contractAddress";
import { rewardTokens } from "constants/rewardTokens";
import { AAVEOracle, FlaexInvest, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { BigNumber, Contract } from "ethers";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BigNumberToNumberAmount, BigNumberToReadableAmount } from "util/commons";
import { TokenYieldList, UserInvestYield } from "util/type";
import { useAccount, useContractRead, useProvider } from "wagmi";
import AmountInvest from "./AmountInvest";
import DrawAmountInvest from "./DrawAmountInvest";
import InvestTable from "./InvestTable";
import RewardTable from "./RewardTable";

const RightContent = () => {
  const provider = useProvider();
  const { address } = useAccount();
  const [ detailYield, setDetailYield ] = useState([]);
  const { data : daiBalance } = useContractRead({
    abi: TestERC20.abi,
    address:contractAddress.DAI as `0x${string}`,
    functionName:"balanceOf",
    args:[address]
  });

  const {data: investorYield} = useContractRead({
    abi: FlaexInvest.abi,
    address: contractAddress.FlaexInvestor as `0x${string}`,
    functionName:"getInvestorYield",
    args:[address]
  });

  const userInvestYield = useMemo(()=>{
    return investorYield? investorYield as Array<any>:[];
  },[investorYield]);

  console.log({userInvestYield});


  const fetchPriceData =  useCallback(async (asset)=>{
    const AAVEOrcaleContract = new Contract(contractAddress.AAVEOracle,AAVEOracle.abi,provider);
    if (!AAVEOrcaleContract) {
      return new Decimal(0);
    } else {
      const price =await  AAVEOrcaleContract.getAssetPrice(asset);
      return new Decimal(price?._hex || 0).div(new Decimal(10).pow(8));
    }
  },[provider]);

  const fetchRewardData =useCallback(async(userInvestYield : Array<any>) =>{
    const data = await Promise.all(userInvestYield.map( async(yeild)=>{
      const price = await fetchPriceData(yeild.asset);
      return {
        title: rewardTokens.get(yeild.asset).symbol,
        value: new Decimal(yeild.amount._hex).div(new Decimal(10).pow(rewardTokens.get(yeild.asset).decimals)),
        netValue : new Decimal(price || 0).mul(new Decimal(yeild.amount._hex).div(new Decimal(10).pow(rewardTokens.get(yeild.asset).decimals))),
      };
    }));
    setDetailYield([...data]);
  },[fetchPriceData]);

  useEffect(()=>{
    if(userInvestYield?.length){
      fetchRewardData(userInvestYield);
    }
  },[fetchRewardData, userInvestYield]);




 const totalRow = useMemo(()=>{
   const total = detailYield.reduce((total, data)=>{
     return total = new Decimal(total).add(data.netValue);
   },new Decimal(0));
   return {
    title:"Total",
    value:total,
   };
 },[detailYield]);

  return (
    <div>
      <div className="flex justify-between text-lg font-semibold bg-border-flaex py-[18px] px-[19px]">
        <p>Balance</p>
        <p>{BigNumberToReadableAmount(daiBalance?(daiBalance as BigNumber):BigNumber.from(0),18)} DAI</p>
      </div>

      <div className="mt-2.5">
        <RewardTable totalRow={totalRow} detailRows={detailYield} />
      </div>

      <div className="mt-2 grid grid-cols-5 gap-2.5">
        <div className="col-span-2 ">
          <AmountInvest balance={daiBalance} />
        </div>
        <div className="col-span-3">
          <DrawAmountInvest />
        </div>
      </div>
    </div>
  );
};

export default RightContent;

