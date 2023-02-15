import { IChildren } from "constants/interface";
import React from "react";

interface IBaseButton {
  moreClass?: string;
  onButtonClick: (item: any) => void;
  children?: IChildren | any;
}

const BaseButton = (props: IBaseButton) => {
  const { moreClass, onButtonClick, children = "Connect Wallet" } = props;
  return (
    <button
      className={`px-2 font-semibold duration-200 rounded-xl py-1 text-[14px] md:text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border ${moreClass}`}
      onClick={onButtonClick}
    >
      <>{children}</>
    </button>
  );
};

export default BaseButton;
