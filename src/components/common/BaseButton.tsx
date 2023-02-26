import { IChildren } from "constants/interface";
import React from "react";

interface IBaseButton {
  moreClass?: string;
  disabled?: boolean;
  onButtonClick: (item: any) => void;
  children?: IChildren | any;
}

const BaseButton = (props: IBaseButton) => {
  const {
    moreClass,
    onButtonClick,
    children = "Connect Wallet",
    disabled,
  } = props;
  return (
    <button
      className={`px-2 font-semibold duration-200 rounded-xl py-1 text-[14px] md:text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border focus:outline-none disabled:opacity-50 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${moreClass}`}
      onClick={onButtonClick}
      disabled={disabled}
    >
      <>{children}</>
    </button>
  );
};

export default BaseButton;
