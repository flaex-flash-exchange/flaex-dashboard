import BaseButton from "components/common/BaseButton";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import ModalCallback from "components/modal/ModalCallback";
import { useModalContext } from "context/ModalContext";
import { testERC20 } from "contracts";
import React, { useEffect, useMemo, useState } from "react";
import { amountToHex } from "util/commons";
import { tokenPair } from "util/constants";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import SelectToken from "./SelectToken";
import { BounceLoader } from "react-spinners";

const MainMint = () => {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState("");
  const [isMouted, setIsMouted] = useState(false);

  const [btnConnected, setbtnConnected] = useState(false);

  const [tokenSelected, setTokenSelected] = useState<number>(0);
  const { pushModal } = useModalContext();

  const { token0, token1, fee } = tokenPair["wETH/DAI"];

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
    args: [
      amountToHex(
        amount ? Number(amount) : 0,
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
      pushModal(
        <ModalCallback
          hash={mintData?.hash}
          content={`Succesfully Mint
      ${amount} ${tokenSelected === 0 ? "WETH" : "DAI"} `}
        />,
      );

      setAmount("");
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
      return {
        content: `Mint ${tokenSelected === 0 ? "WETH" : "DAI"}`,
        loading: false,
      };
    }
    if (isMintLoading) {
      return { content: `Waiting for signing`, loading: true };
    }
    if (isMintSuccess) {
      return { content: `Waiting for network`, loading: true };
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
      <div className="focus:border-flaex-text bg-border-flaex p-6 mt-6 flex items-center justify-between">
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
          disabled={!amount || handleDisableButton}
          onButtonClick={() => mintFunc?.()}
          moreClass="mt-3.5 py-2.5 text-base flex items-center justify-center gap-2 font-semibold rounded-[10px] bg-flaex-button w-full border-none"
        >
          {contentStatus.loading ? (
            <>
              {contentStatus.content}{" "}
              <BounceLoader size={24} color={"#fafafa"} />
            </>
          ) : (
            contentStatus.content
          )}
        </BaseButton>
      ) : (
        <LiteWagmiBtnConnect />
      )}
    </div>
  );
};

export default MainMint;
