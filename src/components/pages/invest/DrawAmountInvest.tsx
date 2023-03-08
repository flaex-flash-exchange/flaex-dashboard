import BaseButton from "components/common/BaseButton";
import { contractAddress } from "constants/contractAddress";
import { FlaexInvest, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { BigNumber } from "ethers";
import React, { useCallback, useState } from "react";
import {
  amountToHex,
  BigNumberToNumberAmount,
  formatNumberWithCommas,
} from "util/commons";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ModalCallback from "components/modal/ModalCallback";
import { useModalContext } from "context/ModalContext";
import { getClaimYieldInfo, getWithdrawInfo } from "util/convertValue";
import { ADDRESS_ZERO } from "@uniswap/v3-sdk";
import { NumericFormat } from "react-number-format";
import { fail } from "assert";
import WriteFuncButton from "components/common/WriteFuncButton";

const DrawAmountInvest = () => {
  const [amount, setAmount] = useState<number>(0);
  const { address } = useAccount();
  const { data: balanceFlToken } = useContractRead({
    address: contractAddress.FlaexToken as `0x${string}`,
    abi: TestERC20.abi,
    functionName: "balanceOf",
    args: [address || ADDRESS_ZERO],
  });
  
  const [isWithdrawMax , setIsWithdrawMax] = useState<boolean>(false);

  const handleChangeAmount = (e: any) => {
    if (isNaN(e.floatValue)) {
      setAmount(0);
    } else {
      if (
        new Decimal(e.floatValue).greaterThan(
          BigNumberToNumberAmount(balanceFlToken as BigNumber, 18),
        )
      ) {
        setAmount(BigNumberToNumberAmount(balanceFlToken as BigNumber, 18));
      } else {
        setAmount(e.floatValue);
      }
    }
  };

  const handleSetWithdrawMax =() => {
    setIsWithdrawMax(true);
    setAmount(
      new Decimal(
        balanceFlToken ? (balanceFlToken as BigNumber)._hex : 0,
      )
        .div(new Decimal(10).pow(18))
        .toNumber(),
    );
  };

  const { pushModal } = useModalContext();

  const pushErrorModal = (hash: string) => {
    pushModal(
      <ModalCallback hash={hash} content="Transaction Failed !" type="error" />,
      true,
    );
  };

  const { config: configWithdrawToken } = usePrepareContractWrite({
    address: contractAddress.FlaexInvestor as `0x${string}`,
    abi: FlaexInvest.abi,
    functionName: "withdraw",
    args: [isWithdrawMax? balanceFlToken : amountToHex(amount.toFixed(4), 18)],
    enabled: amount > 0,
  });

  const {
    data: withdrawData,
    isLoading: isWithdrawLoading,
    isSuccess: isWithdrawSuccess,
    write: withdrawFunc,
  } = useContractWrite(configWithdrawToken);

  const { isSuccess: isWithdrawSucess, isError: isWithdrawError } =
    useWaitForTransaction({
      hash: withdrawData?.hash,
      confirmations: 1,
      onSuccess(data) {
        const result = getWithdrawInfo(data?.logs);
        pushModal(
          <ModalCallback
            hash={data?.transactionHash}
            content={
              <div>
                <div>Successfully Withdrawn</div>
                <div>{result.amountWithdrawn.toFixed(4)} DAI</div>
                {Object.keys(result.YieldInfo).length > 0 ? (
                  <div>
                    <div>And Claimed Yield Of</div>
                    {Object.keys(result.YieldInfo).map((i) => (
                      <div key={i}>
                        {result.YieldInfo[i]} {i}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            }
          />,
          true,
        );
      },
      onError(error) {
        pushErrorModal(withdrawData?.hash);
      },
    });

  const { config: configClaimToken } = usePrepareContractWrite({
    address: contractAddress.FlaexInvestor as `0x${string}`,
    abi: FlaexInvest.abi,
    functionName: "claimYield",
    args: [],
  });


  const {
    data: claimData,
    isLoading: isClaimLoading,
    isSuccess: isClaimSuccess,
    write: claimFunc,
  } = useContractWrite(configClaimToken);

  const { isSuccess: isClaimSucess, isError: isClaimError } =
    useWaitForTransaction({
      hash: claimData?.hash,
      confirmations: 1,
      onSuccess(data) {
        const result = getClaimYieldInfo(data?.logs);
        pushModal(
          <ModalCallback
            hash={data?.transactionHash}
            content={
              <div>
                {Object.keys(result).length > 0 ? (
                  <div>
                    <div>Successfully Claimed Yield Of</div>
                    {Object.keys(result).map((i) => (
                      <div key={i}>
                        {result[i]} {i}
                      </div>
                    ))}
                  </div>
                ) : (
                  // eslint-disable-next-line react/no-unescaped-entities
                  <div>Havent got any Yield!</div>
                )}
              </div>
            }
          />,
          true,
        );
      },
      onError(error) {
        pushErrorModal(claimData?.hash);
      },
    });

  const txWithdrawDone = isWithdrawSucess || isWithdrawError;
  const txClaimDone = isClaimSucess || isClaimError;
  return (
    <div className="bg-border-transparent-flaex p-2.5 flex flex-col justify-between">
      <div className="py-2.5 px-3 bg-flaex-border bg-opacity-5 rounded-[10px]">
        <div className="text-[12px] md:text-[14px] font-normal">
          Withdraw Amount (flDAI)
        </div>
        <NumericFormat
          className="bg-transparent outline-none mt-1"
          onValueChange={handleChangeAmount}
          value={amount}
          allowNegative={false}
          decimalScale={4}
        />
        <div>
          <span
            className="cursor-pointer whitespace-nowrap text-[12px] md:text-[14px] font-light"
            onClick={() => handleSetWithdrawMax()
            }
          >
            Max:{" "}
            {formatNumberWithCommas(
              new Decimal(
                balanceFlToken ? (balanceFlToken as BigNumber)._hex : 0,
              )
                .div(new Decimal(10).pow(18))
                .toNumber(),
              4,
            )}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between gap-2 mt-[7px] ">
        <WriteFuncButton
            lableButton={`Claim`}
            func={claimFunc}
            isLoading={isClaimLoading}
            isSuccess={isClaimSuccess}
            isTxDone={txClaimDone}
            moreClass="col-span-1 button-primary"
          />
        <WriteFuncButton
            lableButton={`Withdraw & Claim`}
            func={withdrawFunc}
            isLoading={isWithdrawLoading}
            isSuccess={isWithdrawSuccess}
            isTxDone={txClaimDone}
            moreClass="col-span-2 button-primary"
          />      
      </div>
    </div>
  );
};

export default DrawAmountInvest;
