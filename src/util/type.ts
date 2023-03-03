import Decimal from "decimal.js";
import { BigNumber } from "ethers";

export interface UserData {
    baseToken: string;
    baseTokenAmount: BigNumber;
    liquidationThreshold: BigNumber;
    marginRatio: BigNumber;
    quoteToken: string;
    quoteTokenAmount: BigNumber;
}
export interface FormatedUserData {
    direction:string;
    leverage:BigNumber;
    baseToken: string;
    collateral: BigNumber;
    liquidationThreshold: number | string;
    marginRatio: number | string;
    quoteToken: string;
    quoteTokenAmount: number | string;
}

export interface FlaexCollateralInfo {
    healthFactor:BigNumber;
    availableBorrowsBase:BigNumber;
    totalCollateralBase: BigNumber;
    totalDebtBase: BigNumber;
    ltv: number | BigNumber;
    currentLiquidationThreshold: BigNumber;
}

export interface UserInvestYield {
    addressess:Array<string>;
    amounts : Array<BigNumber>;
}

export interface TokenYieldList {
    address: string;
    symbol: string;
    decimals: number;
    name:string;
    price: number;
}


export interface LongShortInfo {
    paying: Decimal,
    flashSwap: Decimal,
    borrowingToRepayFlash: Decimal,
    entryPrice: Decimal,
    liquidationPrice: Decimal,
    marginRatio: Decimal,
    commissionFee: Decimal,
    marginAmount: Decimal,
    leverage: Decimal
}
