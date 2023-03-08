import { MaxUint256 } from "@uniswap/sdk-core";
import { ADDRESS_ZERO } from "@uniswap/v3-sdk";
import { contractAddress } from "constants/contractAddress";
import { rewardTokens } from "constants/rewardTokens";
import {
  FlaexInvest,
  AavePool,
  TestERC20,
  FlaexVault,
  AAVEOracle,
} from "contracts";
import Decimal from "decimal.js";
import { BigNumber, constants, Contract } from "ethers";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  amountToBigNumer,
  amountToHex,
  BigNumberToReadableAmount,
  DecimalToReadableAmount,
  formatNumberWithCommas,
} from "util/commons";
import { genesisTime } from "util/constants";
import type { FlaexCollateralInfo } from "util/type";
import { useAccount, useContractRead, useProvider } from "wagmi";
import InvestTable from "./InvestTable";

const LeftContent = () => {
  const provider = useProvider();

  const [flaexAPYDetails, setFlaexAPYDetails] = useState([]);

  const { data: activeAssets } = useContractRead({
    abi: FlaexVault.abi,
    address: contractAddress.FlaexVault as `0x${string}`,
    functionName: "getActiveAssets",
  });

  const { data: acceptedAsset } = useContractRead({
    abi: FlaexInvest.abi,
    address: contractAddress.FlaexInvestor as `0x${string}`,
    functionName: "getAcceptedAsset",
    args: [],
  });

  const assetToInvest = useMemo(() => {
    return acceptedAsset
      ? (acceptedAsset as Array<string>)
      : [ADDRESS_ZERO, "ZERO"];
  }, [acceptedAsset]);

  const allYieldAsset = useMemo(() => {
    return activeAssets ? (activeAssets as Array<string>) : [];
  }, [activeAssets]);

  const { data: totalMinted } = useContractRead({
    abi: TestERC20.abi,
    address: contractAddress.FlaexToken as `0x${string}`,
    functionName: "totalSupply",
    args: [],
  });

  const fetchFLIndex = useCallback(
    async (asset: string) => {
      const VaultContract = new Contract(
        contractAddress.FlaexVault,
        FlaexVault.abi,
        provider,
      );
      const AAVEOrcaleContract = new Contract(
        contractAddress.AAVEOracle,
        AAVEOracle.abi,
        provider,
      );
      if (!VaultContract || !AAVEOrcaleContract || !totalMinted) {
        return { flIndex: 0, oraclePrice: 0, apy: 0 };
      } else {
        const yieldInfo = await VaultContract.getYieldInfo(asset);
        const oraclePrice = await AAVEOrcaleContract.getAssetPrice(asset);
        const apy = new Decimal(
          (totalMinted as BigNumber)?._hex || 0,
        ).greaterThan(0)
          ? new Decimal(yieldInfo?.flIndex._hex || 0)
              .div(new Decimal(10).pow(25))
              .mul(
                new Decimal(oraclePrice?._hex || 0).div(new Decimal(10).pow(8)),
              )
              .div(Date.now() - genesisTime)
              .mul(31536000000)
          : new Decimal(0);
        return {
          asset: rewardTokens.get(asset),
          flIndex: yieldInfo.flIndex,
          oraclePrice: new Decimal(oraclePrice._hex).div(
            new Decimal(10).pow(8),
          ),
          apy: apy,
        };
      }
    },
    [provider, totalMinted],
  );

  const { data: aaveReserveInfo } = useContractRead({
    abi: AavePool.abi,
    address: contractAddress.AAVEPool as `0x${string}`,
    functionName: "getReserveData",
    args: [assetToInvest[0] || ADDRESS_ZERO],
  });

  const AAVEAPY = useMemo(() => {
    ///// rate is wrad 1e27 * 100%
    return aaveReserveInfo
      ? new Decimal(
          (aaveReserveInfo as any).currentVariableBorrowRate._hex,
        ).div(new Decimal(10).pow(25))
      : new Decimal(0);
  }, [aaveReserveInfo]);

  const allAPY = useMemo(() => {
    const flaexTotal = flaexAPYDetails.reduce((total, data) => {
      return (total = new Decimal(total).add(data.apy || 0));
    }, new Decimal(0));
    return [
      { title: "AAVE", value: AAVEAPY },
      {
        title: "flæx",
        value: flaexTotal,
        children: flaexAPYDetails.map((detail) => {
          return {
            title: detail?.asset?.symbol,
            value: detail.apy,
          };
        }),
      },
    ];
  }, [AAVEAPY, flaexAPYDetails]);
  const totalAPY = useMemo(() => {
    const totalAPY = allAPY.reduce((total, data) => {
      return (total = new Decimal(total).add(data.value || 0));
    }, new Decimal(0));
    return {
      title: "Total",
      value: totalAPY,
    };
  }, [allAPY]);

  const { data: getVaultData } = useContractRead({
    abi: AavePool.abi,
    address: contractAddress.AAVEPool as `0x${string}`,
    functionName: "getUserAccountData",
    args: [contractAddress.FlaexVault],
  });

  const collateralInfo: FlaexCollateralInfo =
    getVaultData as unknown as FlaexCollateralInfo;

  const amountToHealthFactor = new Decimal(2)
    .mul(new Decimal(10).pow(18))
    .minus(collateralInfo?.healthFactor?._hex || 0)
    .mul(collateralInfo?.totalDebtBase?._hex || 0);

  const available = amountToHealthFactor.greaterThan(10_000_000)
    ? new Decimal(10_000_000).minus(
        BigNumberToReadableAmount(collateralInfo?.totalCollateralBase, 8),
      )
    : amountToHealthFactor;

  const healthFactor = collateralInfo?.healthFactor.eq(
    constants.MaxUint256._hex,
  )
    ? 0
    : BigNumberToReadableAmount(collateralInfo?.healthFactor, 18);
  const availableToInvest = new Decimal(healthFactor).greaterThan(2)
    ? new Decimal(10_000_000).minus(
        new Decimal((totalMinted as BigNumber)?._hex).div(
          new Decimal(10).pow(18),
        ),
      )
    : available;

  const descInvest = [
    {
      title: "Total Invested (FlToken Minted)",
      value: `${formatNumberWithCommas(
        BigNumberToReadableAmount(
          totalMinted ? (totalMinted as BigNumber) : BigNumber.from(0),
          18,
        ),
        4,
      )} $`,
    },
    { title: "Current Health Factor", value: healthFactor },
    {
      title: "Available to Invest",
      value: `${formatNumberWithCommas(availableToInvest.toNumber(), 4)} $`,
    },
  ];

  const fetchFLAPYDetails = useCallback(() => {
    (async () => {
      const array = await Promise.all(
        allYieldAsset.map(async (asset) => {
          return await fetchFLIndex(asset);
        }),
      );
      setFlaexAPYDetails(array);
    })();
  }, [allYieldAsset, fetchFLIndex]);

  useEffect(() => {
    if (allYieldAsset.length) {
      fetchFLAPYDetails();
    }
  }, [allYieldAsset.length, fetchFLAPYDetails]);

  return (
    <div>
      <div className="flex justify-between text-lg font-semibold bg-border-flaex py-[18px] px-[19px]">
        <p>Eligible Stable Coin</p>
        <p>DAI</p>
      </div>

      <div className="mt-2.5">
        <InvestTable totalRow={totalAPY} detailRows={allAPY} />
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
