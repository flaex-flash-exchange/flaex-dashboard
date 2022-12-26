import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Header = ({
  setToggleCollapse,
  toggleCollapse,
}: {
  setToggleCollapse: any;
  toggleCollapse: boolean;
}): JSX.Element => {
  const handleSidebar = () => {
    setToggleCollapse((prev: boolean) => !prev);
  };

  return (
    <div className="flex justify-between">
      <Link href={"/"}>
        <a className="flex items-center">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="w-[60px] h-[60px] mr-2"
          />
          <span className={`text-[30px] leading-[50px] tracking-[3px]`}>
            flæx
          </span>
        </a>
      </Link>

      <div className="flex gap-2 items-center">
        <Link href="/">
          <button className="px-2 font-semibold duration-200 rounded-2xl py-1 text-[16px] lg:px-5 lg:py-2 border mr-2 md:mr-5 ease-in cursor-pointer border-text-flaex-border">
            Connect Wallet
          </button>
        </Link>
        <div className="block cursor-pointer z-10" onClick={handleSidebar}>
          {toggleCollapse ? <FaTimes size={20} /> : <FaAlignRight size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
    </div>
  );
};

export default Header;
