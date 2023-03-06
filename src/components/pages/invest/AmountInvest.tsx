import BaseButton from "components/common/BaseButton";
import { contractAddress } from "constants/contractAddress";
import { FlaexInvest, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { BigNumber, constants, Contract } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import { amountToHex, BigNumberToReadableAmount } from "util/commons";
import {
  useAccount,
  useProvider,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ModalCallback from "components/modal/ModalCallback";
import { useModalContext } from "context/ModalContext";
import { getProvideInfo } from "util/convertValue";

const AmountInvest = ({ balance }: { balance: any }) => {
  const [amount, setAmount] = useState<number>(0);
  const { address } = useAccount();
  const [isApproved, setIsApproved] = useState<boolean>(true);
  const provider = useProvider();
  const { pushModal } = useModalContext();

  const pushErrorModal = (hash: string) => {
    pushModal(
      <ModalCallback hash={hash} content="Transaction Failed !" type="error" />,
      true,
    );
  };

  const fetchAllowance = useCallback(async () => {
    const contract = new Contract(contractAddress.DAI, TestERC20.abi, provider);
    if (!contract) {
      return;
    } else {
      const allowance = await contract.allowance(
        address,
        contractAddress.FlaexInvestor,
      );
      if (new Decimal(allowance._hex || 0).lessThanOrEqualTo(0)) {
        setIsApproved(false);
      }
    }
  }, [address, provider]);

  const { config: configApprovalToken } = usePrepareContractWrite({
    address: contractAddress.DAI as `0x${string}`,
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
    onSuccess(data) {
      pushModal(
        <ModalCallback
          hash={data?.transactionHash}
          content={`Successfully Approved`}
        />,
        true,
      );
      setIsApproved(true);
    },
    onError(error) {
      pushErrorModal(approvalTokenData?.hash);
    },
  });

  const { config: configInvestToken } = usePrepareContractWrite({
    address: contractAddress.FlaexInvestor as `0x${string}`,
    abi: FlaexInvest.abi,
    functionName: "provide",
    args: [amountToHex(amount, 18)],
    enabled: amount > 0,
  });

  const {
    data: investTokenData,
    isLoading: isInvestLoading,
    isSuccess: isInvestSuccess,
    write: investFunc,
  } = useContractWrite(configInvestToken);

  const { isSuccess, isError } = useWaitForTransaction({
    hash: investTokenData?.hash,
    confirmations: 1,
    onSuccess(data) {
      const result = getProvideInfo(data?.logs);
      pushModal(
        <ModalCallback
          hash={data?.transactionHash}
          content={
            <div>
              <div>Successfully Provided</div>
              <div>{`${result.toFixed(2)}`} DAI</div>
            </div>
          }
        />,
        true,
      );
    },
    onError(error) {
      pushErrorModal(investTokenData?.hash);
    },
  });

  const txInvestDone = isSuccess || isError;

  const handleChangeAmount = useCallback((e: any) => {
    setAmount(Number(e.target.value));
  }, []);

  useEffect(() => {
    fetchAllowance();
  }, [fetchAllowance]);

  return (
    <div className="bg-border-transparent-flaex p-2.5">
      <div className="py-2.5 px-3 bg-flaex-border bg-opacity-5 rounded-[10px]">
        <div className="text-[12px] md:text-[14px] font-normal">
          Amount (DAI)
        </div>
        <input
          className="bg-transparent outline-none mt-1"
          onChange={handleChangeAmount}
          value={amount}
          type="number"
        />
        <span
          className="cursor-pointer whitespace-nowrap text-[12px] md:text-[14px] font-light"
          onClick={() =>
            setAmount(
              new Decimal(balance._hex).div(new Decimal(10).pow(18)).toNumber(),
            )
          }
        >
          Max: {BigNumberToReadableAmount(balance, 18)}
        </span>
      </div>
      <div className="mt-[7px]">
        {!isApproved && (
          <BaseButton
            disabled={
              !approvalTokenFunc || isApprovalLoading || isApprovalSuccess
            }
            onButtonClick={() => approvalTokenFunc?.()}
            moreClass="col-span-2 button-primary"
          >
            {!isApprovalLoading && !isApprovalSuccess && `Approval DAI`}
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
            {((!isInvestLoading && !isInvestSuccess) || txInvestDone) &&
              `Invest`}
            {isInvestLoading && `Waiting for signing`}
            {isInvestSuccess && !txInvestDone && `Waiting for network`}
          </BaseButton>
        )}
      </div>
    </div>
  );
};

export default AmountInvest;
