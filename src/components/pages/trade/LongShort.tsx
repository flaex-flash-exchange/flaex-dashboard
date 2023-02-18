import BaseButton from "components/common/BaseButton";
import SliderCustom from "components/common/SliderCustom";
import { ConnectWalletBtn } from "components/layout/ConnectButton";
import { contractAddress } from "constants/contractAddress";
import { useContextTrade } from "context/TradeContext";
import Decimal from "decimal.js";
import { constants, Contract, Signer } from "ethers";
import { QuoterReturn } from "hooks/useQuote";
import { useCallback, useEffect, useMemo, useState } from "react";
import { _onLongCalculator, _onShortCalculator } from "util/commons";
import { LSBtn, tokenPair } from "util/constants";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useSigner,
  useWaitForTransaction,
} from "wagmi";
import { testERC20, flaexMain } from "../../../contracts";

const LongShort = ({ price }: { price: QuoterReturn }) => {
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const { coupleTradeCoins } = useContextTrade();
  const [isMouted , setIsMouted] = useState(false);
  const provider = useProvider();
  const [isLong, setIsLong] = useState<boolean>(true);
  const [isApprovedLongToken, setIsApprovedLongToken] =
    useState<boolean>(true);
  const [isApprovedShortToken, setIsApprovedShortToken] =
    useState<boolean>(true);
  const [amountValue, setAmount] = useState<number>(0);
  const [balanceValue, setBalanceValue] = useState<number>(4.2);
  const [percentage, setPercentage] = useState<number>(0);
  const [btnConnected, setbtnConnected] = useState(false);
  const isActiveBtn = useMemo(() => amountValue > 0, [amountValue]);

  const { token0, token1, fee } = useMemo(() => {
    return tokenPair[coupleTradeCoins.origin || ""];
  }, [coupleTradeCoins]);

  const btnLabel = useMemo(() => (isLong ? LSBtn.LONG : LSBtn.SHORT), [isLong]);

  const longShortChanging = useMemo(
    () =>
      isLong
        ? _onLongCalculator(percentage, amountValue, price.priceExactOutputToken1)
        : _onShortCalculator(percentage, amountValue, price.priceExactInputToken0),
    [percentage, amountValue, price, isLong],
  );

  const fetchAllowance = useCallback(async () => {
    const longToken = new Contract(token0.address, testERC20.abi, provider);
    const shortToken = new Contract(token1.address, testERC20.abi, provider);
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

  const { config: configApprovalShortToken  } = usePrepareContractWrite({
    address: token1.address,
    abi: testERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexMain, constants.MaxUint256],
  });

  const {
    data: approvalShortTokenData,
    isLoading:isApprovalShortLoading,
    isSuccess:isApprovalShortSuccess,
    write: approvalShortTokenFunc,
  } = useContractWrite(configApprovalShortToken);

  useWaitForTransaction({
    hash: approvalShortTokenData?.hash,
    confirmations: 1,
    onSuccess() {
      setIsApprovedShortToken(true);
    },
  });

  const { config: configApprovalLongToken } = usePrepareContractWrite({
    address: token0.address,
    abi: testERC20.abi,
    functionName: "approve",
    args: [contractAddress.FlaexMain,constants.MaxUint256],
  });
  const {
    data: approvalLongTokenData,
    isLoading:isApprovalLongLoading,
    isSuccess:isApprovalLongSuccess,
    write: approvalLongTokenFunc,
  } = useContractWrite(configApprovalLongToken);

  useWaitForTransaction({
    hash: approvalLongTokenData?.hash,
    confirmations: 1,
    onSuccess() {
      setIsApprovedLongToken(true);
    },
  });


  const { config: configLong } = usePrepareContractWrite({
    address: contractAddress.FlaexMain as `0x${string}`,
    abi: flaexMain.abi,
    functionName: "openExactOutput",
    args: [token0.address,token1.address,new Decimal(longShortChanging.paying).mul(new Decimal(10).pow(token0.decimals)).toHex(),constants.MaxUint256,fee,new Decimal(percentage).mul(100).toHex()],
  });
  const {
    data: longData,
    isLoading:isLongLoading,
    isSuccess:isLongSuccess,
    write: longFunc,
  } = useContractWrite(configLong);

  const {isSuccess: isLongConfirmed}=useWaitForTransaction({
    hash: longData?.hash,
    confirmations: 1,
    onSuccess() {
      console.log("Long success");
    },
  });

  const { config: configShort } = usePrepareContractWrite({
    address: contractAddress.FlaexMain as `0x${string}`,
    abi: flaexMain.abi,
    functionName: "openExactOutput",
    args: [token1.address,token0.address,new Decimal(longShortChanging.paying).mul(new Decimal(10).pow(token0.decimals)).toHex(),constants.MaxUint256,fee,new Decimal(percentage).mul(100).toHex()],
  });
  const {
    data: dataShort,
    isLoading:isShortLoading,
    isSuccess:isShortSuccess,
    write: shortFunc,
  } = useContractWrite(configShort);

  const {isSuccess: isShortConfirmed}=useWaitForTransaction({
    hash: dataShort?.hash,
    confirmations: 1,
    onSuccess() {
      console.log("Long success");
    },
  });

  const handleChangeLongShort = (clickedLong: boolean) => {
    if (clickedLong) {
      setIsLong(true);
    } else {
      setIsLong(false);
    }
    setAmount(0);
    setBalanceValue(0);
    setPercentage(0);
  };

  const handleChangeSlider = (value: number) => {
    setPercentage(value);
  };
  const handleChangeAmount = useCallback((e: any) => {
    setAmount(e.target.value);
  }, []);

  const handleLongShort = useCallback(
    (type: string) => {
      if (!isActiveBtn) {
        return;
      }
      switch (type) {
        case LSBtn.LONG:
          console.log("click", type);
          break;
        case LSBtn.SHORT:
          console.log("click", type);
          break;
        default:
          break;
      }
    },
    [isActiveBtn],
  );

  const _onSetBalance = useCallback((_balance: number) => {
    setAmount(_balance);
  }, []);

  useEffect(() => {
    if(isMouted){
      setbtnConnected(isConnected);
      fetchAllowance();
    } else {
      setIsMouted(true);
    }
  }, [isConnected, fetchAllowance, isMouted]);

  return (
    <>
    {isMouted && (
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
          <span>Collateral In</span>
        </div>

        <div className="flex justify-between mt-2.5 font-normal text-sm">
          <input
            className="bg-transparent outline-none"
            onChange={handleChangeAmount}
            value={amountValue}
          />
          <span>{coupleTradeCoins?.base}</span>
        </div>
      </div>

      <div className="rounded-[10px] bg-flaex-border bg-opacity-5 py-2.5 px-4 mt-1">
        <div className="flex justify-between text-[12px] font-light">
          <span>Paying</span>
          <span>{coupleTradeCoins?.base}</span>
        </div>

        <div
          className="flex justify-between mt-2.5 font-normal text-sm cursor-pointer"
          onClick={() => _onSetBalance(balanceValue)}
        >
          <span>{longShortChanging.paying}</span>
          <span>Balance: {balanceValue}</span>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <p className="text-xs font-light italic">Flash Swap:</p>
          <p className="text-sm font-semibold">{`${longShortChanging?.flashSwap} ${isLong?coupleTradeCoins?.base:coupleTradeCoins?.quote}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs font-light italic">Borrowing to Repay Flash:</p>
          <p className="text-sm font-semibold">{`${longShortChanging?.borrowingToRepayFlash} ${isLong?coupleTradeCoins?.quote:coupleTradeCoins.base}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs font-light italic">Entry Price:</p>
          <p className="text-sm font-semibold">{`${longShortChanging?.entryPrice}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs font-light italic">Liquidation Price:</p>
          <p className="text-sm font-semibold">{`${longShortChanging?.liquidationPrice}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs font-light italic">Margin Ratio:</p>
          <p className="text-sm font-semibold">{`${longShortChanging?.marginRatio}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs font-light italic">Commission Fee:</p>
          <p className="text-sm font-semibold">{`${longShortChanging?.commissionFee} ${isLong?coupleTradeCoins?.quote:coupleTradeCoins?.base}`}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        {btnConnected ? (
          <>
            {isMouted && isLong && !isApprovedLongToken ? (
              <>
                <BaseButton
                  disable={!approvalLongTokenFunc || !isApprovalLongLoading || isApprovalLongSuccess}
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
                {isMouted && !isLong && !isApprovedShortToken ? (
                  <BaseButton
                    disable={!approvalShortTokenFunc || !isApprovalShortLoading || isApprovalShortSuccess}
                    onButtonClick={() => approvalShortTokenFunc?.()}
                    moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
                  >
                    {!isApprovalShortLoading &&
                      !isApprovalShortSuccess &&
                      `Approval ${token1.name}`}
                    {isApprovalShortLoading && `Waiting for signing`}
                    {isApprovalShortSuccess && `Waiting for network`}
                  </BaseButton>
                ) :  
                <>
                {isMouted &&isLong && isApprovedShortToken ? (
                   <BaseButton
                    disable={!longFunc || !isLongLoading || isLongSuccess}
                    onButtonClick={() => longFunc?.()}
                    moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
                    >
                      {!isLongLoading &&
                        !isLongSuccess &&
                        `${btnLabel} ${coupleTradeCoins?.origin}`}
                      {isLongLoading && `Waiting for signing`}
                      {isLongSuccess && `Waiting for network`}
                    </BaseButton>
                ):
                (
                  <BaseButton
                    disable={!shortFunc || !isShortLoading || isShortSuccess}
                    onButtonClick={() => shortFunc?.()}
                    moreClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none"
                    >
                      {!isShortLoading &&
                        !isShortSuccess &&
                        `${btnLabel} ${coupleTradeCoins?.origin}`}
                      {isShortLoading && `Waiting for signing`}
                      {isShortSuccess && `Waiting for network`}
                    </BaseButton>
                )}
                </>
                }
              </>
            )}
          </>
        ) : (
          <ConnectWalletBtn extendClass="mt-3.5 py-2.5 text-base font-semibold rounded-[10px] bg-flaex-button w-full border-none" />
        )}
      </div>
    </div>
    )}
    </>
  );
};

export default LongShort;

const mockData = {
  amount: 10,
  tokenName: "ETH",
  payingValue: 2.941,
  balanceValue: 4.2,
  descInfo: [
    { title: "Flash Swap:", value: "7.059 ETH" },
    { title: "Borrowing to Repay Flash:", value: "8665.98 USDC" },
    { title: "Entry Price:", value: "1227.65" },
    { title: "Liquidation Price:", value: "960.84" },
    { title: "Margin Ratio:", value: "1.41" },
    { title: "Commission Fee:", value: "8.66 USDC" },
  ],
};

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
