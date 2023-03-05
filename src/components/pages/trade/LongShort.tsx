import { ADDRESS_ZERO } from "@uniswap/v3-sdk";
import BaseButton from "components/common/BaseButton";
import SliderCustom from "components/common/SliderCustom";
import { LiteWagmiBtnConnect } from "components/layout/ConnectButton";
import ModalCallback from "components/modal/ModalCallback";
import { contractAddress } from "constants/contractAddress";
import { useModalContext } from "context/ModalContext";
import { useContextTrade } from "context/TradeContext";
import Decimal from "decimal.js";
import { BigNumber, constants, Contract } from "ethers";
import useQuoter, { QuoterReturn } from "hooks/useQuote";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NumericFormat } from "react-number-format";
import {
  BigNumberToReadableAmount,
  _onLongCalculator,
  _onShortCalculator,
} from "util/commons";
import { LSBtn, tokenPair } from "util/constants";
import { getOpenInfo } from "util/convertValue";
import { LongShortInfo } from "util/type";

import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useWaitForTransaction,
} from "wagmi";
import { FlaexMain, TestERC20 } from "../../../contracts";

const LongShort = ({
  price,
  fetchLongShortData,
}: {
  price: QuoterReturn;
  fetchLongShortData: () => void;
}) => {
  const { address, isConnected } = useAccount();
  const { pairCrypto } = useContextTrade();
  const { pushModal } = useModalContext();

  const provider = useProvider();
  const [isLong, setIsLong] = useState<boolean>(true);
  const [isApprovedLongToken, setIsApprovedLongToken] = useState<boolean>(true);
  const [isApprovedShortToken, setIsApprovedShortToken] =
    useState<boolean>(true);
  const [amountValue, setAmount] = useState<string | number>("0");
  const [percentage, setPercentage] = useState<number>(0);
  const [btnConnected, setbtnConnected] = useState(false);
  const [payingValue, setpayingValue] = useState<string | number>("0");
  const { token0, token1, fee } = useMemo(() => {
    return tokenPair[pairCrypto.origin || ""];
  }, [pairCrypto]);

  const btnLabel = useMemo(() => (isLong ? LSBtn.LONG : LSBtn.SHORT), [isLong]);

  console.log({btnLabel});
  console.log({isLong});
  const quotedAmountOut = useQuoter(
    token1,
    token0,
    1,
    token0.decimals,
    token1.decimals,
    fee,
  );
  const markPriceParser = isLong
    ? quotedAmountOut.priceExactInputToken0
    : quotedAmountOut.priceExactOutputToken1;

  const pushErrorModal = (hash: string) => {
    pushModal(
      <ModalCallback hash={hash} content="Transaction Failed !" type="error" />,
      true,
    );
  };

  const longShortInfo: LongShortInfo = useMemo(
    () =>
      isLong
        ? _onLongCalculator(
            percentage,
            amountValue,
            payingValue,
            price.priceExactOutputToken1,
          )
        : _onShortCalculator(
            percentage,
            amountValue,
            payingValue,
            price.priceExactInputToken0,
          ),
    [percentage, amountValue, payingValue, price, isLong],
  );

  const fetchAllowance = useCallback(async () => {
    const longToken = new Contract(token0.address, TestERC20.abi, provider);
    const shortToken = new Contract(token1.address, TestERC20.abi, provider);
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
        setIsApprovedLongToken(false);
      }
      if (new Decimal(allowanceShortToken._hex || 0).equals(0)) {
        setIsApprovedShortToken(false);
      }
    }
  }, [address, provider, token0.address, token1.address]);

  const { data: baseBalance } = useContractRead({
    abi: TestERC20.abi,
    address: token0.address,
    functionName: "balanceOf",
    args: [address ? address : ADDRESS_ZERO],
  });

  const { data: quoteBalance } = useContractRead({
    abi: TestERC20.abi,
    address: token1.address,
    functionName: "balanceOf",
    args: [address ? address : ADDRESS_ZERO],
  });

  const { config: configApprovalShortToken } = usePrepareContractWrite({
    address: token1.address,
    abi: TestERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexMain, constants.MaxUint256],
  });

  const {
    data: approvalShortTokenData,
    isLoading: isApprovalShortLoading,
    isSuccess: isApprovalShortSuccess,
    write: approvalShortTokenFunc,
  } = useContractWrite(configApprovalShortToken);

  useWaitForTransaction({
    hash: approvalShortTokenData?.hash,
    confirmations: 1,
    onSuccess(data) {
    //   console.log("onSuccess - setIsApprovedShortToken", data);
    //   pushModal(
    //     <ModalCallback
    //       hash={"mintData?.hash"}
    //       content={`Succesfully Opened position for`}
    //     />,
    //     true,
    //   );
      setIsApprovedShortToken(true);
    },
    // onError(error) {
    //   pushErrorModal("hash");
    //   console.log("setIsApprovedShortToken Short Error", error);
    // },
  });

  const { config: configApprovalLongToken } = usePrepareContractWrite({
    address: token0.address,
    abi: TestERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexMain, constants.MaxUint256],
  });
  const {
    data: approvalLongTokenData,
    isLoading: isApprovalLongLoading,
    isSuccess: isApprovalLongSuccess,
    write: approvalLongTokenFunc,
  } = useContractWrite(configApprovalLongToken);

  useWaitForTransaction({
    hash: approvalLongTokenData?.hash,
    confirmations: 1,
    onSuccess(data) {
    //   console.log("onSuccess - setIsApprovedLongToken", data);
      setIsApprovedLongToken(true);
    //   pushModal(
    //     <ModalCallback
    //       hash={"mintData?.hash"}
    //       content={`Succesfully Opened position for`}
    //     />,
    //     true,
    //   );
    // },
    // onError(error) {
    //   console.log("setIsApprovedLongToken Short Error", error);
    //   pushErrorModal("hash");
    },
  });

  const { config: configLong } = usePrepareContractWrite({
    address: contractAddress.FlaexMain as `0x${string}`,
    abi: FlaexMain.abi,
    functionName: "openExactOutput",
    args: [
      token0.address,
      token1.address,
      new Decimal(longShortInfo.paying.toFixed(4))
        .mul(new Decimal(10).pow(token0.decimals))
        .toHex(),
      constants.MaxUint256,
      fee,
      longShortInfo.leverage.mul(100).toHex(),
    ],
    enabled: Boolean(new Decimal(longShortInfo.paying).greaterThan(0)),
  });

  const {
    data: longData,
    isLoading: isLongLoading,
    isSuccess: isLongSuccess,
    write: longFunc,
  } = useContractWrite(configLong);

  const { isSuccess: isLongConfirmed , isError : isLongError } = useWaitForTransaction({
    hash: longData?.hash,
    confirmations: 1,
    onSuccess(data) {
      const result = getOpenInfo(true, data?.logs, token0.decimals, token1.decimals);
      pushModal(
        <ModalCallback
          hash={data?.transactionHash}
          content={
            <div>
              <div>Successfully Opened Long</div>
              <div>{`${result.Amount.toFixed(4)} ${token0.symbol} at ${new Decimal(result.Price).toFixed(4)}`}</div>
            </div>
          }
        />,
        true,
      );
      fetchLongShortData();
    },
    onError(error) {
      pushErrorModal("hash");
      console.log("Error - Fail", error);
    },
  });

  const txLongDone = isLongConfirmed || isLongError;

  const { config: configShort } = usePrepareContractWrite({
    address: contractAddress.FlaexMain as `0x${string}`,
    abi: FlaexMain.abi,
    functionName: "openExactOutput",
    args: [
      token1.address,
      token0.address,
      new Decimal(longShortInfo.paying.toFixed(4))
        .mul(new Decimal(10).pow(token1.decimals))
        .toHex(),
      constants.MaxUint256,
      fee,
      longShortInfo.leverage.mul(100).toHex(),
    ],
    enabled: Boolean(new Decimal(longShortInfo.paying).greaterThan(0)),
  });
  const {
    data: dataShort,
    isLoading: isShortLoading,
    isSuccess: isShortSuccess,
    write: shortFunc,
  } = useContractWrite(configShort);

  const { isSuccess: isShortConfirmed , isError : isShortError} = useWaitForTransaction({
    hash: dataShort?.hash,
    confirmations: 1,
    onSuccess(data) {
      const result = getOpenInfo(false, data?.logs, token0.decimals, token1.decimals);

      pushModal(
        <ModalCallback
          hash={data?.transactionHash}
          content={
            <div>
              <div>Successfully Opened Short</div>
              <div>{`${result.Amount.toFixed(4)} ${token0.symbol} at ${new Decimal(result.Price).toFixed(4)}`}</div>
            </div>
          }
        />,
        true,
      );
      fetchLongShortData();
    },
    onError(error) {
      pushErrorModal("hash");
      console.log("Error - Fail", error);
    },
  });

  const txShortDone = isShortConfirmed || isShortError;

  const handleChangeLongShort = (clickedLong: boolean) => {
    if (clickedLong) {
      setIsLong(true);
    } else {
      setIsLong(false);
    }
    setAmount(0);
    setPercentage(0);
  };

  const handleChangeSlider = (value: number) => {
    if (!Number(value)) {
      setPercentage(0);
      return;
    } else {
      // -> keep amount and percen , calculate paying value
      setPercentage(value);
      setAmount(longShortInfo.marginAmount.toNumber());
      setpayingValue(0);
    }
  };

  const _onBalance = isLong
    ? BigNumberToReadableAmount(
        baseBalance ? (baseBalance as BigNumber) : BigNumber.from(0),
        token0.decimals,
      )
    : BigNumberToReadableAmount(
        quoteBalance ? (quoteBalance as BigNumber) : BigNumber.from(0),
        token1.decimals,
      );

  const handleChangeAmount = (e: any) => {
    let eAmount = e.floatValue;
    // -> keep amount and percen , calculate paying value
    if (isNaN(eAmount)) {
      setAmount(0);
      setpayingValue(0);
    } else if (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(eAmount)) {
      if (
        new Decimal(eAmount).greaterThan(
          new Decimal(_onBalance).mul(100 + percentage).div(100),
        )
      ) {
        eAmount = new Decimal(_onBalance)
          .mul(100 + percentage)
          .div(100)
          .toNumber();
      }
      // -> keep paying and percen , calculate amount value
      setAmount(eAmount);
      setpayingValue(0);
    }
  };

  const handleChangePaying = (e: any) => {
    let ePaying = e.floatValue;
    if (isNaN(ePaying)) {
      setpayingValue(0);
      setAmount(0);
    } else if (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(ePaying)) {
      if (new Decimal(ePaying).greaterThan(_onBalance)) {
        ePaying = new Decimal(_onBalance).toNumber();
      }
      // -> keep paying and percen , calculate amount value
      setpayingValue(ePaying);
      setAmount(0);
    }
  };

  const _onSetBalance = (_balance: any) => {
    setAmount(0);
    setpayingValue(_balance);
  };

  useEffect(() => {
   
      setbtnConnected(isConnected);
      fetchAllowance();
  }, [isConnected, fetchAllowance]);

  return (
    <>
        <div className="flex h-full flex-col">
          <div className="flex text-base font-semibold bg-flaex-border bg-opacity-5 rounded-[10px]">
            <button
              onClick={() => {
                handleChangeLongShort(true);
              }}
              className={`flex-1 ${
                isLong ? "bg-flaex-button" : ""
              } text-base py-2.5 rounded-[10px]`}
            >
              {LSBtn.LONG}
            </button>

            <button
              onClick={() => {
                handleChangeLongShort(false);
              }}
              className={`flex-1 ${
                !isLong ? "bg-flaex-button" : ""
              } text-base py-2.5 rounded-[10px]`}
            >
              {LSBtn.SHORT}
            </button>
          </div>

          <div className="mt-[22px]">
            <div className="text-sm font-semibold">Leverage</div>
            <div className="flex justify-between rounded-[10px] bg-flaex-border bg-opacity-5 py-1 px-2 mt-2">
              <input
                className="bg-transparent outline-none"
                onChange={(e: any) => handleChangeSlider(e.target.value)}
                value={percentage}
                max={1000}
                type="number"
              />
              <div className="mr-2">%</div>
            </div>

            <div className="mt-8">
              <SliderCustom
                value={percentage}
                onChangeValue={handleChangeSlider}
                marks={marks}
                max={1000}
              />
            </div>
          </div>

          <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-12">
            <div className="flex justify-between text-[12px] font-light">
              <span>Amount</span>
            </div>

            <div className="flex justify-between mt-2.5 font-normal text-sm">
              <NumericFormat
                className="bg-transparent outline-none w-full"
                onValueChange={handleChangeAmount}
                allowNegative={false}
                decimalScale={4}
                value={
                  amountValue
                    ? amountValue
                    : longShortInfo.marginAmount.toNumber()
                }
              />
              <span>{pairCrypto?.base}</span>
            </div>
          </div>

          <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-1">
            <div className="flex justify-between text-[12px] font-light">
              <span>Paying</span>
              <span>{isLong ? pairCrypto?.base : pairCrypto?.quote}</span>
            </div>

            <div className="flex justify-between mt-2.5 font-normal text-sm">
              {/* <span>{longShortInfo.paying}</span> */}
              <NumericFormat
                className="bg-transparent outline-none w-full"
                onValueChange={handleChangePaying}
                allowNegative={false}
                decimalScale={4}
                value={
                  payingValue ? payingValue : longShortInfo.paying.toNumber()
                }
              />
              <span
                className="cursor-pointer whitespace-nowrap"
                onClick={() => _onSetBalance(_onBalance)}
              >
                Balance: {_onBalance}
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Total Collateral:</p>
              <p className="text-sm font-semibold whitespace-nowrap ">{`
                ${
                  isLong
                    ? longShortInfo.marginAmount.toFixed(4)
                    : longShortInfo.flashSwap
                        .add(longShortInfo.paying)
                        .toFixed(4)
                }
                
                ${isLong ? pairCrypto?.base : pairCrypto?.quote}`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Flash Swap:</p>
              <p className="text-sm font-semibold whitespace-nowrap ">{`${Number(
                longShortInfo?.flashSwap,
              ).toFixed(4)} ${
                isLong ? pairCrypto?.base : pairCrypto?.quote
              }`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">
                Borrowing to Repay Flash:
              </p>
              <p className="text-sm font-semibold whitespace-nowrap">{`${Number(
                longShortInfo?.borrowingToRepayFlash,
              ).toFixed(4)} ${
                isLong ? pairCrypto?.quote : pairCrypto.base
              }`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Entry Price:</p>
              <p className="text-sm font-semibold whitespace-nowrap">{`${longShortInfo?.entryPrice.toFixed(
                4,
              )}`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Liquidation Price:</p>
              <p className="text-sm font-semibold whitespace-nowrap">{`${longShortInfo?.liquidationPrice.toFixed(
                4,
              )}`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Margin Ratio:</p>
              <p className="text-sm font-semibold whitespace-nowrap">{`${longShortInfo?.marginRatio.toFixed(
                4,
              )}`}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-light italic">Commission Fee:</p>
              <p className="text-sm font-semibold whitespace-nowrap">{`${longShortInfo?.commissionFee.toFixed(
                4,
              )} ${isLong ? pairCrypto?.quote : pairCrypto?.base}`}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            {btnConnected ? (
              <>
                {isLong && !isApprovedLongToken ? (
                  <>
                    <BaseButton
                      disabled={
                        !approvalLongTokenFunc ||
                        isApprovalLongLoading ||
                        isApprovalLongSuccess
                      }
                      onButtonClick={() => approvalLongTokenFunc?.()}
                      moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
                    >
                      {!isApprovalLongLoading &&
                        !isApprovalLongSuccess &&
                        `Approval ${token0.name}`}
                      {isApprovalLongLoading && `Waiting for signing`}
                      {isApprovalLongSuccess && `Waiting for network`}
                    </BaseButton>
                  </>
                ) : (
                  <>
                    {!isLong && !isApprovedShortToken ? (
                      <BaseButton
                        disabled={
                          !approvalShortTokenFunc ||
                          isApprovalShortLoading ||
                          isApprovalShortSuccess
                        }
                        onButtonClick={() => approvalShortTokenFunc?.()}
                        moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
                      >
                        {!isApprovalShortLoading &&
                          !isApprovalShortSuccess &&
                          `Approval ${token1.name}`}
                        {isApprovalShortLoading && `Waiting for signing`}
                        {isApprovalShortSuccess && `Waiting for network`}
                      </BaseButton>
                    ) : (
                      <>
                        {isLong && isApprovedLongToken ? (
                          <BaseButton
                            disabled={
                              !longFunc ||
                              isLongLoading ||
                              (isLongSuccess && !txLongDone)
                            }
                            onButtonClick={() => longFunc?.()}
                            moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
                          >
                            {((!isLongLoading && !isLongSuccess) ||
                              txLongDone) &&
                              `${btnLabel} ${pairCrypto?.origin}`}
                            {isLongLoading && `Waiting for signing`}
                            {isLongSuccess &&
                              !txLongDone &&
                              `Waiting for network`}
                          </BaseButton>
                        ) : (
                          <BaseButton
                            disabled={
                              !shortFunc ||
                              isShortLoading ||
                              (isShortSuccess && !txShortDone)
                            }
                            onButtonClick={() => shortFunc?.()}
                            moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
                          >
                            {((!isShortLoading && !isShortSuccess) ||
                              txShortDone) &&
                              `${btnLabel} ${pairCrypto?.origin}`}
                            {isShortLoading && `Waiting for signing`}
                            {isShortSuccess &&
                              !txShortDone &&
                              `Waiting for network`}
                          </BaseButton>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <LiteWagmiBtnConnect />
            )}
          </div>
        </div>
    </>
  );
};

export default LongShort;

const marks = {
  0: <strong>0%</strong>,
  100: "100%",
  200: "200%",
  300: "300%",
  400: "400%",
  500: "500%",
  600: "600%",
  700: "700%",
  800: "800%",
  900: "900%",
  1000: {
    style: {
      color: "red",
    },
    label: <strong>1000%</strong>,
  },
};
