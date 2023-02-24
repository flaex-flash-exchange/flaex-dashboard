import BaseButton from "components/common/BaseButton";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import { contractAddress } from "constants/contractAddress";
import { useContextTrade } from "context/TradeContext";
import { testERC20 } from "contracts";
import { constants } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { FaCog } from "react-icons/fa";
import { tokenPair } from "util/constants";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import SelectToken from "./SelectToken";

const MainMint = () => {
  const [amount, setAmount] = useState();
  const [isMouted, setIsMouted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isApprovedMintToken, setIsApprovedMintToken] = useState(false);

  const [tokenSelected, setTokenSelected] = useState();

  const { token0, token1, fee } = tokenPair["wETH/DAI"];

  const onSelectCouple = (value) => {
    console.log("Token Value", value);
  };

  const { config: configApprovalMintToken } = usePrepareContractWrite({
    address: token1.address,
    abi: testERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexMain, constants.MaxUint256],
  });

  const {
    data: approvalMintTokenData,
    isLoading: isApprovalMintLoading,
    isSuccess: isApprovalMintSuccess,
    write: approvalMintTokenFunc,
  } = useContractWrite(configApprovalMintToken);

  useWaitForTransaction({
    hash: approvalMintTokenData?.hash,
    confirmations: 1,
    onSuccess() {
      setIsApprovedMintToken(true);
    },
  });

  useEffect(() => {
    setIsLoading(true);
  }, []);

  // useEffect(() => {
  //   if (isMouted) {
  //     setbtnConnected(isConnected);
  //     fetchAllowance();
  //   } else {
  //     setIsMouted(true);
  //   }
  // }, [isConnected, fetchAllowance, isMouted]);

  return (
    <div className="w-2/5 bg-border-flaex p-6">
      <div className="flex items-center w-full">
        <span className="font-semibold text-[20px]">Mint</span>
        {/* <button>
          <FaCog size={20} />
        </button> */}
      </div>

      <div className="bg-border-flaex p-6 mt-6 flex items-center justify-between">
        <input
          className="flex-1 w-full bg-transparent outline-none text-[20px] font-semibold"
          placeholder="0"
          type="text"
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
        />
        <div className="text-flaex-heading w-[100px]">
          <SelectToken onSelectToken={onSelectCouple} />
        </div>
      </div>

      {/* {isMouted && !isLong && !isApprovedMintToken ? (
        <button
          className="button-primary mt-10 text-[20px] py-4"
          disabled={
            !approvalMintTokenFunc ||
            isApprovalMintLoading ||
            isApprovalMintSuccess
          }
          onClick={() => approvalMintTokenFunc?.()}
        >
          {!isApprovalMintLoading &&
            !isApprovalMintSuccess &&
            `Approval ${token1.name}`}
          {isApprovalMintLoading && `Waiting for signing`}
          {isApprovalMintSuccess && `Waiting for network`}
        </button>
      ) : (
        <BaseButton
          disabled={!shortFunc || isShortLoading || isShortSuccess}
          onButtonClick={() => shortFunc?.()}
          moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
        >
          {!isShortLoading &&
            !isShortSuccess &&
            `${btnLabel} ${coupleTradeCoins?.origin}`}
          {isShortLoading && `Waiting for signing`}
          {isShortSuccess && `Waiting for network`}
        </BaseButton>
      )} */}

      <LiteWagmiBtnConnect />
    </div>
  );
};

export default MainMint;
