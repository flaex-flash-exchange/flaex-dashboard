import BaseButton from "components/common/BaseButton";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import { contractAddress } from "constants/contractAddress";
import { useContextTrade } from "context/TradeContext";
import { testERC20 } from "contracts";
import { constants } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { FaCog } from "react-icons/fa";
import { amountToHex } from "util/commons";
import { tokenPair } from "util/constants";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import SelectToken from "./SelectToken";

const MainMint = () => {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState();
  const [isMouted, setIsMouted] = useState(false);

  const [btnConnected, setbtnConnected] = useState(false);

  const [tokenSelected, setTokenSelected] = useState<number>(0);

  const { token0, token1, fee } = tokenPair["wETH/DAI"];
  const [contentButton, setContentButton] = useState<string>();

  const onSelectToken = (value) => {
    setTokenSelected(value);
  };

  const { config: configLong } = usePrepareContractWrite({
    address:
      tokenSelected === 0
        ? (token0.address as `0x${string}`)
        : (token1.address as `0x${string}`),
    abi: testERC20.abi,
    functionName: "mint(uint256)",
    args: [amountToHex(amount ? amount : 0, token0.decimals)],
  });

  const {
    data: mintData,
    isLoading: isMintLoading,
    isSuccess: isMintSuccess,
    write: mintFunc,
  } = useContractWrite(configLong);

  const { isSuccess: isMintConfirmed } = useWaitForTransaction({
    hash: mintData?.hash,
    confirmations: 1,
    onSuccess() {
      console.log("Mint success");
      // getData();
    },
  });

  console.log("isMintLoading", isMintLoading);
  console.log("isMintSuccess", isMintSuccess);
  console.log("isMintConfirmed", isMintConfirmed);

  useEffect(() => {
    if (isMouted) {
      setbtnConnected(isConnected);
    } else {
      setIsMouted(true);
    }
  }, [isConnected, isMouted]);

  const handleStatus = () => {
    console.log(
      "(!isLoading && !isMintSuccess)",
      !isMintLoading && !isMintSuccess,
    );
    if (isMintConfirmed || (!isMintLoading && !isMintSuccess)) {
      return `Mint ${tokenSelected === 0 ? "WETH" : "DAI"}`;
    }
    if (isMintLoading) {
      return `Waiting for signing`;
    }
    if (isMintSuccess) {
      return `Waiting for network`;
    }
  };
  useEffect(() => {
    setContentButton(handleStatus());
  }, [isMintLoading, isMintSuccess, isMintConfirmed]);

  return (
    <div className="md:w-2/5 bg-border-flaex p-6">
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
        <div className="text-flaex-heading w-[120px] flex justify-end">
          <SelectToken onSelectToken={onSelectToken} />
        </div>
      </div>
      {btnConnected ? (
        <BaseButton
          disabled={!mintFunc || isMintLoading || isMintSuccess}
          onButtonClick={() => mintFunc?.()}
          moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
        >
          {contentButton}
        </BaseButton>
      ) : (
        <LiteWagmiBtnConnect />
      )}
    </div>
  );
};

export default MainMint;
