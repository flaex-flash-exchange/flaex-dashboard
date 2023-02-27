import BaseButton from "components/common/BaseButton";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import { contractAddress } from "constants/contractAddress";
import { useContextTrade } from "context/TradeContext";
import { TestERC20 } from "contracts";
import { constants } from "ethers";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { FaCog, FaExternalLinkAlt, FaRegCheckCircle } from "react-icons/fa";
import { toast, ToastContent } from "react-toastify";
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

  const onSelectToken = (value: any) => {
    setTokenSelected(value);
  };

  const { config: configLong } = usePrepareContractWrite({
    address:
      tokenSelected === 0
        ? (token0.address as `0x${string}`)
        : (token1.address as `0x${string}`),
    abi: TestERC20.abi,
    functionName: "mint(uint256)",
    args: [
      amountToHex(
        amount ? amount : 0,
        tokenSelected === 0 ? token0.decimals : token1.decimals,
      ),
    ],
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
      const toastContent: any = () => {
        return (
          <div className="p-4 bg-flaex-bg-primary bg-border-flaex">
            <div className="flex text-[16px] font-medium items-center gap-2 text-flaex-green">
              Mint Confirmed
              <span className="text-[20px]">
                <FaRegCheckCircle />
              </span>
            </div>
            <a
              href={`https://goerli.etherscan.io/tx/${mintData?.hash}`}
              className="cursor-pointer mt-1 flex items-center gap-2 text-[14px] hover:underline hover:decoration-solid duration-200"
              target="blank"
            >
              View on etherscan
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>
          </div>
        );
      };

      console.log(`https://goerli.etherscan.io/hash/${mintData?.hash}`);

      toast.success(toastContent(), {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: false,
        icon: false,
        closeOnClick: false,
        style: {
          background: "transparent",
          color: "white",
          textAlign: "center",
        },
      });
    },
  });

  useEffect(() => {
    if (isMouted) {
      setbtnConnected(isConnected);
    } else {
      setIsMouted(true);
    }
  }, [isConnected, isMouted]);

  const contentStatus = useMemo(() => {
    if (isMintConfirmed || (!isMintLoading && !isMintSuccess)) {
      return `Mint ${tokenSelected === 0 ? "WETH" : "DAI"}`;
    }
    if (isMintLoading) {
      return `Waiting for signing`;
    }
    if (isMintSuccess) {
      return `Waiting for network`;
    }
  }, [isMintConfirmed, isMintLoading, isMintSuccess, tokenSelected]);

  const handleDisableButton = useMemo(() => {
    if (isMintLoading || (!isMintConfirmed && isMintSuccess)) {
      return true;
    }
    return false;
  }, [isMintConfirmed, isMintLoading, isMintSuccess]);

  return (
    <div className="md:w-2/5 bg-border-flaex p-6">
      <div className="flex items-center w-full">
        <span className="font-semibold text-[20px]">Mint</span>
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
          disabled={handleDisableButton}
          onButtonClick={() => mintFunc?.()}
          moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
        >
          {contentStatus}
        </BaseButton>
      ) : (
        <LiteWagmiBtnConnect />
      )}
    </div>
  );
};

export default MainMint;
