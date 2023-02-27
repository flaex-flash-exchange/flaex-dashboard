import { contractAddress } from "constants/contractAddress";
import { rewardTokens } from "constants/rewardTokens";
import { FlaexInvest, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import React from "react";
import { BigNumberToNumberAmount, BigNumberToReadableAmount } from "util/commons";
import { TokenYieldList, UserInvestYield } from "util/type";
import { useAccount, useContractRead } from "wagmi";
import AmountInvest from "./AmountInvest";
import DrawAmountInvest from "./DrawAmountInvest";
import InvestTable from "./InvestTable";

const RightContent = () => {

  const { address } = useAccount();
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

  const userInvestYield : Array<any> = investorYield as unknown as Array<UserInvestYield>;
  
  const detailRowsTerm = userInvestYield?.length?userInvestYield[0].map((address : string,index: number)=>{
    console.log("userInvestYield[1][index]",userInvestYield[1][index]);
    console.log("index",index);
    return {
      title:rewardTokens.get(address)?.symbol,
      value:`${BigNumberToReadableAmount(userInvestYield[1][index],rewardTokens?.get(address)?.decimals)} (${BigNumberToNumberAmount(userInvestYield[1][index],rewardTokens?.get(address)?.decimals)} $)` ,
    };

  }):[];

  return (
    <div>
      <div className="flex justify-between text-lg font-semibold bg-border-flaex py-[18px] px-[19px]">
        <p>Balance</p>
        <p>{BigNumberToReadableAmount(daiBalance?(daiBalance as BigNumber):BigNumber.from(0),18)} DAI</p>
      </div>

      <div className="mt-2.5">
        <InvestTable totalRow={totalRowTerm} detailRows={detailRowsTerm} />
      </div>

      <div className="mt-2 grid grid-cols-5 gap-2.5">
        <div className="col-span-2 ">
          <AmountInvest />
        </div>
        <div className="col-span-3">
          <DrawAmountInvest />
        </div>
      </div>
    </div>
  );
};

export default RightContent;

const totalRowTerm = { title: "Yield Earned", value: "$459.79" };

// const detailRowsTerm = [
//   { title: "WBTC", value: "0.0014 ($159.85)", isSmallText: true },
//   { title: "WETH", value: "0.1 ($101.80)", isSmallText: true },
//   { title: "USDC", value: "150 ($151.11)", isSmallText: true },
//   { title: "USDT", value: "49 ($48.67)", isSmallText: true },
// ];
