import React from "react";

interface IBaseButton {
  moreClass?: string;
  btnLabel?: string;
  onButtonClick: (item: any) => void;
}

const BaseButton = (props: IBaseButton) => {
  const { moreClass, onButtonClick, btnLabel = "Connect Wallet" } = props;
  return (
    <button
      className={`px-2 font-semibold duration-200 rounded-xl py-1 text-[14px] md:text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border ${moreClass}`}
      onClick={onButtonClick}
    >
      {btnLabel}
    </button>
  );
};

export default BaseButton;
