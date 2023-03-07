import BaseButton from "components/common/BaseButton";
import SliderCustom from "components/common/SliderCustom";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import ModalCallback from "components/modal/ModalCallback";
import { contractAddress } from "constants/contractAddress";
import { useModalContext } from "context/ModalContext";
import { useContextTrade } from "context/TradeContext";
import { FlaexMain, TestERC20 } from "contracts";
import Decimal from "decimal.js";
import { constants, Contract } from "ethers";
import { QuoterReturn } from "hooks/useQuote";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NumericFormat } from "react-number-format";
import { BounceLoader } from "react-spinners";
import { amountToHex } from "util/commons";
import { eventLogs, Shippaple, tokenPair } from "util/constants";
import { toBigNumber, getCloseInfo, getRepayInfo } from "util/convertValue";

import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useWaitForTransaction,
} from "wagmi";

const CloseRepay = ({
  price,
  fetchLongShortData,
}: {
  price: QuoterReturn;
  fetchLongShortData: () => void;
}) => {
  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const [isRepay, setIsPay] = useState<boolean>(true);
  const [percentage, setPercentage] = useState<number | string>(0);
  const [btnConnected, setbtnConnected] = useState(false);
  const { setIsShowLong, repayCloseData } = useContextTrade();
  const { pairCrypto } = useContextTrade();
  const { pushModal } = useModalContext();

  const { token0, token1, fee } = useMemo(() => {
    return tokenPair[pairCrypto.origin || ""];
  }, [pairCrypto]);

  const [isApprovedRepayLongToken, setIsApprovedRepayLongToken] =
    useState<boolean>(true);
  const [isApprovedRepayShortToken, setIsApprovedRepayShortToken] =
    useState<boolean>(true);

  const fetchAllowance = useCallback(async () => {
    const longToken = new Contract(token1.address, TestERC20.abi, provider);
    const shortToken = new Contract(token0.address, TestERC20.abi, provider);
    if (!longToken || !address || !shortToken) {
      return;
    } else {
      const allowanceLongToken = await longToken.allowance(
        address,
        contractAddress.FlaexMain,
      );
      const allowanceShortToken = await shortToken.allowance(
        address,
        contractAddress.FlaexMain,
      );
      if (new Decimal(allowanceLongToken._hex || 0).equals(0)) {
        setIsApprovedRepayLongToken(false);
      }
      if (new Decimal(allowanceShortToken._hex || 0).equals(0)) {
        setIsApprovedRepayShortToken(false);
      }
    }
  }, [address, provider, token0.address, token1.address]);

  const available = useMemo(()=>{
    return repayCloseData
    ? isRepay
      ? new Decimal(repayCloseData?.quoteTokenAmount).mul(0.9999).toFixed(4)
      : new Decimal(repayCloseData?.baseTokenAmount).toFixed(4)
    : 0;
  },[repayCloseData,isRepay]);

  const [amountValue, setAmount] = useState<number | string>(
    repayCloseData
      ? new Decimal(available).mul(percentage).div(100).toFixed(4)
      : 0,
  );

  const handleChangeLongShort = (clicked: boolean) => {
    if (clicked) {
      setAmount(0);
      setIsPay(true);
      setPercentage(0);
    } else {
      setAmount(0);
      setIsPay(false);
      setPercentage(0);
    }
  };

  const handleChangeSlider = (value: number) => {
    if (!value) {
      setAmount(0);
      setPercentage(0);
      return;
    }
    const amount = new Decimal(available).mul(value).div(100).toFixed(4);
    setAmount(amount);
    setPercentage(value);
  };

  const handleChangeAmount = (e: any) => {
    let value = e.floatValue;
    if (isNaN(value)) {
      setAmount(0);
      setPercentage(0);
    } else if (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(value)) {
      if (new Decimal(value).greaterThan(available)) {
        value = new Decimal(available).toNumber();
      }
      // -> keep paying and percen , calculate amount value
      if (isRepay) {
        const percen = new Decimal(value)
          .div(repayCloseData?.quoteTokenAmount)
          .mul(100)
          .toFixed(4);
        setPercentage(percen);
      } else {
        const percen = new Decimal(value)
          .div(repayCloseData?.baseTokenAmount)
          .mul(100)
          .toFixed(4);
        setPercentage(percen);
      }
      setAmount(value);
    }
  };

  const handleBackToTrade = () => {
    setIsShowLong(true);
  };

  const minQuoteTokenAmountLong = toBigNumber(
    new Decimal(price.priceExactInputToken0)
      .mul(amountValue)
      .mul(1 + Shippaple.HIGH),
    token1.decimals,
  );
  const minQuoteTokenAmountShort = toBigNumber(
    new Decimal(price.priceExactOutputToken1)
      .mul(amountValue)
      .mul(1 + Shippaple.HIGH),
    token0.decimals,
  );
  const { config: configClose, error } = usePrepareContractWrite({
    address: contractAddress.FlaexMain as `0x${string}`,
    abi: FlaexMain.abi,
    functionName: "closeExactInput",
    args: repayCloseData?.isLong
      ? [
          token0.address,
          token1.address,
          percentage == 100
            ? constants.MaxUint256
            : amountToHex(amountValue, token0.decimals),
          0,
          fee,
        ]
      : [
          token1.address,
          token0.address,
          percentage == 100
            ? constants.MaxUint256
            : amountToHex(amountValue, token1.decimals),
          0,
          fee,
        ],
    enabled: !isRepay && amountValue > 0 && percentage > 0,
  });
  const {
    data: dataClose,
    isLoading: isCloseLoading,
    isSuccess: isCloseSuccess,
    write: closeFunc,
  } = useContractWrite(configClose);

  const { isSuccess: isCloseConfirmed, isError: isCloseEroor } =
    useWaitForTransaction({
      hash: dataClose?.hash,
      confirmations: 1,
      onSuccess(data) {
        const result = getCloseInfo(token0.address, data?.logs, address);
        const isLong = result.isLong;
        pushModal(
          <ModalCallback
            hash={data?.transactionHash}
            content={
              <div>
                <div>Successfully Closed {isLong ? "Long" : "Short"}</div>
                <div>{`${result.Amount} ETH at ${result.Price}`}</div>
                <div>
                  Receive {isLong ? result.receiveBase : result.receiveQuote}{" "}
                  ETH and{" "}
                  <div>
                    {isLong ? result.receiveQuote : result.receiveBase} DAI
                  </div>
                </div>
              </div>
            }
          />,
          true,
        );

        fetchLongShortData();
      },
    });

  const txCloseDone = isCloseConfirmed || isCloseEroor;

  const { config: configRepay } = usePrepareContractWrite({
    address: contractAddress.FlaexMain as `0x${string}`,
    abi: FlaexMain.abi,
    functionName: "repayPartialDebt",
    args: repayCloseData?.isLong
      ? [
          token0.address,
          token1.address,
          amountToHex(amountValue, token1.decimals),
        ]
      : [
          token1.address,
          token0.address,
          amountToHex(amountValue, token0.decimals),
        ],
    enabled: amountValue > 0 && percentage > 0 && new Decimal(amountValue).lt(repayCloseData?.quoteTokenAmount || 0) && ((repayCloseData?.isLong  && isApprovedRepayLongToken ) || (!repayCloseData?.isLong  && isApprovedRepayShortToken)),
  });
  const {
    data: dataRepay,
    isLoading: isRepayLoading,
    isSuccess: isRepaySuccess,
    write: repayFunc,
  } = useContractWrite(configRepay);

  const { isSuccess: isRepayConfirmed, isError: isRepayError } =
    useWaitForTransaction({
      hash: dataRepay?.hash,
      confirmations: 1,
      onSuccess(data) {
        const result = getRepayInfo(token0.address, data?.logs, address);
        pushModal(
          <ModalCallback
            hash={data?.transactionHash}
            content={
              <div>
                <div>Successfully Repaid </div>
                <div>
                  {result.Amount} {result.isLong ? " ETH" : " DAI"}
                </div>
              </div>
            }
          />,
          true,
        );
        fetchLongShortData();
      },
    });

  const txRepayDone = isRepayConfirmed || isRepayError;

  const { config: configApprovalRepayShortToken } = usePrepareContractWrite({
    address: token0.address,
    abi: TestERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexMain, constants.MaxUint256],
  });

  const {
    data: approvalRepayShortTokenData,
    isLoading: isApprovalRepayShortLoading,
    isSuccess: isApprovalRepayShortSuccess,
    write: approvalRepayShortTokenFunc,
  } = useContractWrite(configApprovalRepayShortToken);

  useWaitForTransaction({
    hash: approvalRepayShortTokenData?.hash,
    confirmations: 1,
    onSuccess() {
      setIsApprovedRepayShortToken(true);
    },
  });

  const { config: configApprovalRepayLongToken } = usePrepareContractWrite({
    address: token1.address,
    abi: TestERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexMain, constants.MaxUint256],
  });
  const {
    data: approvalRepayLongTokenData,
    isLoading: isApprovalRepayLongLoading,
    isSuccess: isApprovalRepayLongSuccess,
    write: approvalRepayLongTokenFunc,
  } = useContractWrite(configApprovalRepayLongToken);

  useWaitForTransaction({
    hash: approvalRepayLongTokenData?.hash,
    confirmations: 1,
    onSuccess() {
      setIsApprovedRepayLongToken(true);
    },
  });

  useEffect(() => {
    setbtnConnected(isConnected);
  }, [isConnected]);

  useEffect(() => {
    fetchAllowance();
  }, [fetchAllowance]);

  const marginRatioAfter = useMemo(() => {
    if (!amountValue || !repayCloseData) return 0;
    const amountValueParser = new Decimal(amountValue);
    const debtMinusAmount = new Decimal(repayCloseData?.quoteTokenAmount).minus(
      amountValueParser,
    );

    if (!isRepay) {
      return repayCloseData?.isLong
        ? new Decimal(repayCloseData?.baseTokenAmount)
            .mul(new Decimal(repayCloseData?.markPrice))
            .div(debtMinusAmount)
            .toFixed(4)
        : new Decimal(repayCloseData?.baseTokenAmount)
            .minus(amountValueParser)
            .div(
              new Decimal(repayCloseData?.quoteTokenAmount).mul(
                repayCloseData?.markPrice,
              ),
            )
            .toFixed(4);
    } else {
      return repayCloseData?.isLong
        ? new Decimal(repayCloseData?.baseTokenAmount)
            .mul(repayCloseData?.markPrice)
            .div(
              new Decimal(repayCloseData?.quoteTokenAmount).minus(
                amountValueParser,
              ),
            )
            .toFixed(4)
        : new Decimal(repayCloseData?.baseTokenAmount)
            .div(repayCloseData?.markPrice)
            .div(
              new Decimal(repayCloseData.quoteTokenAmount).minus(
                amountValueParser,
              ),
            )
            .toFixed(4);
    }
  }, [amountValue, repayCloseData, isRepay]);

  const { receiveToken0, receiveToken1, commissionFee } = useMemo(() => {
    if (repayCloseData) {
      const priceFlash = repayCloseData?.isLong
        ? price.priceExactInputToken0
        : price.priceExactOutputToken1;
      const flashSwap = repayCloseData?.isLong
        ? new Decimal(amountValue).mul(priceFlash).mul(0.9995)
        : new Decimal(amountValue).div(priceFlash).mul(0.9995);
      if (flashSwap.gte(repayCloseData?.quoteTokenAmount || 0)) {
        if (repayCloseData?.isLong) {
          return {
            receiveToken0: new Decimal(repayCloseData?.baseTokenAmount)
              .sub(amountValue)
              .toFixed(4),
            receiveToken1: new Decimal(flashSwap)
              .sub(repayCloseData?.quoteTokenAmount)
              .toFixed(4),
            commissionFee: new Decimal(flashSwap).mul(0.0005).toFixed(4),
          };
        } else {
          return {
            receiveToken1: new Decimal(repayCloseData?.baseTokenAmount)
              .sub(amountValue)
              .toFixed(4),
            receiveToken0: new Decimal(flashSwap)
              .sub(repayCloseData?.quoteTokenAmount)
              .toFixed(4),
            commissionFee: new Decimal(flashSwap).mul(0.0005).toFixed(4),
          };
        }
      } else {
        return {
          receiveToken0: new Decimal(0).toFixed(4),
          receiveToken1: new Decimal(0).toFixed(4),
          commissionFee: new Decimal(0).toFixed(4),
        };
      }
    } else {
      return {
        receiveToken0: new Decimal(0).toFixed(4),
        receiveToken1: new Decimal(0).toFixed(4),
        commissionFee: new Decimal(0).toFixed(4),
      };
    }
  }, [
    amountValue,
    price.priceExactInputToken0,
    price.priceExactOutputToken1,
    repayCloseData,
  ]);

  useEffect(() => {
    if (percentage > 0) {
      setAmount(new Decimal(available).mul(percentage).div(100).toFixed(4));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repayCloseData]);

  const onSetMax = useCallback(() => {
    setAmount(new Decimal(available).toNumber());
    setPercentage(isRepay ? 99.99 : 100);
  }, [available, isRepay]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex text-base font-semibold bg-flaex-border bg-opacity-5 rounded-[10px]">
        <button
          onClick={() => {
            handleChangeLongShort(true);
          }}
          className={`flex-1 ${
            isRepay ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          Repay
        </button>

        <button
          onClick={() => {
            handleChangeLongShort(false);
          }}
          className={`flex-1 ${
            !isRepay ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          Close
        </button>
      </div>

      <div>
        <button
          onClick={() => handleBackToTrade()}
          className="center-all mt-4 gap-2 w-full justify-end hover:text-flaex-primary"
        >
          <FaArrowLeft size={11} />
          <span className="text-xs italic font-normal"> Back to Trade</span>
        </button>
      </div>

      <div className="mt-[8px]">
        <div className="text-sm font-semibold">
          {isRepay ? "Repay Percentage" : "Close Percentage"}
        </div>

        {isRepay && (
          <div className="flex justify-between rounded-[10px] bg-flaex-border bg-opacity-5 py-1 px-2 mt-2">
            <input
              className="bg-transparent outline-none w-full"
              onChange={(e: any) => handleChangeSlider(e.target.value)}
              value={percentage}
              max={isRepay ? 99.99 : 100}
              type="number"
            />
            <div className="mr-2">%</div>
          </div>
        )}

        <div className="mt-8">
          <SliderCustom
            value={percentage}
            onChangeValue={handleChangeSlider}
            // disabled={!isRepay}
            marks={isRepay ? marks_99 : marks_100}
            max={isRepay ? 99.99 : 100}
          />
        </div>
      </div>

      <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-12">
        <div className="flex justify-between text-[12px] font-light">
          <span>Amount</span>
          <span className="cursor-pointer" onClick={() => onSetMax()}>
            Available
          </span>
        </div>
        <div className="flex justify-between mt-2.5 font-normal text-sm">
          <NumericFormat
            className="bg-transparent outline-none w-full"
            onValueChange={handleChangeAmount}
            value={amountValue}
            max={available}
            allowNegative={false}
            decimalScale={4}
          />
          <span className="cursor-pointer" onClick={() => onSetMax()}>
            {available}
          </span>
        </div>
      </div>

      <div className="mt-5">
        {isRepay ? (
          <>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Entry Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.entryPrice : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.markPrice : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Liquidation Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.liquidPrice : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Margin Ratio:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.marginRatio : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Margin Ratio After:</p>
              <p className="text-sm font-semibold">{marginRatioAfter}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">PnL:</p>
              <p className="text-sm font-semibold">
                {`${repayCloseData ? repayCloseData?.pnlPercent : 0} %`}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Entry Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.entryPrice : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.markPrice : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Liquidation Price:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.liquidPrice : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Current Margin Ratio:</p>
              <p className="text-sm font-semibold">
                {repayCloseData ? repayCloseData?.marginRatio : 0}
              </p>
            </div>

            {/* {isRepay ? (
              <div className="flex justify-between">
                <p className="text-xs font-light italic">Margin Ratio After:</p>
                <p className="text-sm font-semibold">{marginRatioAfter}</p>
              </div>
            ) : null} */}

            <div className="flex justify-between">
              <p className="text-xs font-light italic">PnL:</p>
              <p className="text-sm font-semibold">
                {`${repayCloseData ? repayCloseData?.pnlPercent : 0} %`}
              </p>
            </div>
            {/* <div className="flex justify-between"> */}
            <p className="text-xs font-light italic">Receive:</p>
            <p className="text-sm font-semibold">
              <>
                <div className="flex justify-between ">
                  <p className="text-xs font-light italic pl-2">
                    {token0.symbol}:
                  </p>
                  {Number(receiveToken0) < 0 ? 0 : receiveToken0}
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-light italic pl-2">
                    {token1.symbol}:
                  </p>
                  {Number(receiveToken1) < 0 ? 0 : receiveToken1}
                </div>
              </>
            </p>
            {/* </div> */}
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Commission Fee:</p>
              <p className="text-sm font-semibold">
                {`${Number(commissionFee) < 0 ? 0 : commissionFee} ${
                  repayCloseData?.isLong ? token1.symbol : token0.symbol
                }`}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-end">
        {btnConnected ? (
          <>
            {isRepay &&
              ((repayCloseData?.isLong && isApprovedRepayLongToken) ||
                (!repayCloseData?.isLong && isApprovedRepayShortToken)) && (
                <>
                  <BaseButton
                    disabled={
                      !repayFunc ||
                      isRepayLoading ||
                      (isRepaySuccess && !txRepayDone)
                    }
                    onButtonClick={() => repayFunc?.()}
                    moreClass="mt-3.5 py-2.5 text-base flex items-center justify-center gap-2 font-semibold rounded-[10px] bg-flaex-button w-full"
                  >
                    {((!isRepayLoading && !isRepaySuccess) || txRepayDone) &&
                      `Repay Partition Debt`}
                    {isRepayLoading && <>Waiting for signing</>}
                    {isRepaySuccess && !txRepayDone && (
                      <>
                        Waiting for network{" "}
                        <BounceLoader size={24} color={"#fafafa"} />
                      </>
                    )}
                  </BaseButton>
                </>
              )}

            {isRepay && repayCloseData?.isLong && !isApprovedRepayLongToken && (
              <>
                <BaseButton
                  disabled={
                    !approvalRepayLongTokenFunc ||
                    isApprovalRepayLongLoading ||
                    isApprovalRepayLongSuccess
                  }
                  onButtonClick={() => approvalRepayLongTokenFunc?.()}
                  moreClass="mt-3.5 py-2.5 text-base flex items-center justify-center gap-2 font-semibold rounded-[10px] bg-flaex-button w-full"
                >
                  {!isApprovalRepayLongLoading &&
                    !isApprovalRepayLongSuccess &&
                    `Approval ${token1.name}`}
                  {isApprovalRepayLongLoading && (
                    <>
                      Waiting for signing{" "}
                      <BounceLoader size={24} color={"#fafafa"} />
                    </>
                  )}
                  {isApprovalRepayLongSuccess && (
                    <>
                      Waiting for network{" "}
                      <BounceLoader size={24} color={"#fafafa"} />
                    </>
                  )}
                </BaseButton>
              </>
            )}

            {isRepay &&
              !repayCloseData?.isLong &&
              !isApprovedRepayShortToken && (
                <>
                  <BaseButton
                    disabled={
                      !approvalRepayShortTokenFunc ||
                      isApprovalRepayShortLoading ||
                      isApprovalRepayShortSuccess
                    }
                    onButtonClick={() => approvalRepayShortTokenFunc?.()}
                    moreClass="mt-3.5 py-2.5 text-base flex items-center justify-center gap-2 font-semibold rounded-[10px] bg-flaex-button w-full"
                  >
                    {!isApprovalRepayShortLoading &&
                      !isApprovalRepayShortSuccess &&
                      `Approval ${token0.name}`}
                    {isApprovalRepayShortLoading && (
                      <>
                        Waiting for signing{" "}
                        <BounceLoader size={24} color={"#fafafa"} />
                      </>
                    )}
                    {isApprovalRepayShortSuccess && (
                      <>
                        Waiting for network{" "}
                        <BounceLoader size={24} color={"#fafafa"} />
                      </>
                    )}
                  </BaseButton>
                </>
              )}

            {!isRepay && (
              <>
                <BaseButton
                  disabled={
                    !closeFunc ||
                    isCloseLoading ||
                    (isCloseSuccess && !txCloseDone)
                  }
                  onButtonClick={() => closeFunc?.()}
                  moreClass="mt-3.5 py-2.5 text-base flex items-center justify-center gap-2 font-semibold rounded-[10px] bg-flaex-button w-full"
                >
                  {((!isCloseLoading && !isCloseSuccess) || txCloseDone) &&
                    `Close Position`}
                  {isCloseLoading && (
                    <>
                      Waiting for signing{" "}
                      <BounceLoader size={24} color={"#fafafa"} />
                    </>
                  )}
                  {isCloseSuccess && !txCloseDone && (
                    <>
                      Waiting for network{" "}
                      <BounceLoader size={24} color={"#fafafa"} />
                    </>
                  )}
                </BaseButton>
              </>
            )}
          </>
        ) : (
          <LiteWagmiBtnConnect />
        )}
      </div>
    </div>
  );
};

export default CloseRepay;

const marks_99 = {
  0: <strong>0%</strong>,
  10: "10%",
  20: "20%",
  30: "30%",
  40: "40%",
  50: "50%",
  60: "60%",
  70: "70%",
  80: "80%",
  90: "90%",
  99.99: {
    style: {
      color: "red",
    },
    label: <strong>99.99%</strong>,
  },
};
const marks_100 = {
  0: <strong>0%</strong>,
  10: "10%",
  20: "20%",
  30: "30%",
  40: "40%",
  50: "50%",
  60: "60%",
  70: "70%",
  80: "80%",
  90: "90%",
  100: {
    style: {
      color: "red",
    },
    label: <strong>100.00%</strong>,
  },
};

// PNL = markPrice/entryPrice * leverage
// marginRatio = colateral/debt (same unit)
// marginRatioAfter = colateral/(debt - amount) (same unit)
// wallet 6xx...4xx
// block number at  bottom
// debt;
