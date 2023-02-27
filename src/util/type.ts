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