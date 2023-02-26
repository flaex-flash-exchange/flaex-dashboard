import { contractAddress } from "constants/contractAddress";
import { FlaexInvest, AavePool, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import React from "react";
import { amountToBigNumer, amountToHex, BigNumberToReadableAmount, DecimalToReadableAmount } from "util/commons";
import type { FlaexCollateralInfo } from "util/type";
import { useAccount, useContractRead } from "wagmi";
import InvestTable from "./InvestTable";

const LeftContent = () => {
  const {data : acceptedAddress  } = useContractRead({
      abi: FlaexInvest.abi,
      address:contractAddress.FlaexInvestor as `0x${string}`,
      functionName:"getAcceptedAsset",
  });

  const {data : getVaultData } = useContractRead({
      abi: AavePool.abi,
      address:contractAddress.AAVEPool as `0x${string}`,
      functionName:"getUserAccountData",
      args:[contractAddress.FlaexVault]
  });

  const {data : totalMinted } = useContractRead({
    abi: TestERC20.abi,
    address:contractAddress.FlaexToken as `0x${string}`,
    functionName:"totalSupply",
    args:[]
  });

  const collateralInfo : FlaexCollateralInfo = getVaultData as unknown as FlaexCollateralInfo; 

  const amountToHealthFactor = new Decimal(2).mul(new Decimal(10).pow(18)).minus(collateralInfo?.healthFactor?._hex || 0).mul(collateralInfo?.totalDebtBase?._hex || 0);

  console.log("collateralInfo?.totalCollateralBase._hex",collateralInfo?.totalCollateralBase._hex);
  const available = amountToHealthFactor.greaterThan(10_000_000)?new Decimal(10_000_000).minus(BigNumberToReadableAmount(collateralInfo?.totalCollateralBase,8)).mul(new Decimal(10).pow(18)):amountToHealthFactor;
  
  


  const descInvest = [
    { title: "Total Invested (FlToken Minted)", value:  `${BigNumberToReadableAmount(totalMinted?(totalMinted as BigNumber):BigNumber.from(0),18)} $`},
    { title: "Current Health Factor", value: BigNumberToReadableAmount(collateralInfo?.healthFactor,18)},
    { title: "Available to Invest", value: `${DecimalToReadableAmount(available,18)} $`  },
  ];


  return (
    <div>
      <div className="flex justify-between text-lg font-semibold bg-border-flaex py-[18px] px-[19px]">
        <p>Eligible Stable Coin</p>
        <p>DAI</p>
      </div>

      <div className="mt-2.5">
        <InvestTable totalRow={totalRowTerm} detailRows={detailRowsTerm} />
      </div>

      <div className="bg-border-flaex mt-2.5 pb-[12px] pt-[10px] px-[19px]">
        {descInvest.map((item: any, idx: any) => (
          <div key={idx} className="flex justify-between mt-1">
            <div className="font-light text-[14px]">{item.title}</div>
            <div className="font-semibold text-[16px]">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftContent;

const totalRowTerm = { title: "Total APY", value: "58.8%" };

const detailRowsTerm = [
  { title: "AAVE", value: "2.8%" },
  {
    title: "flæx",
    value: "56%",
    children: [
      { title: "WBTC", value: "12%" },
      { title: "WETH", value: "14%" },
      { title: "USDC", value: "20%" },
      { title: "USDT", value: "10%" },
    ],
  },
];


