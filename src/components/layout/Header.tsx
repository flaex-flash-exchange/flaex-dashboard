import Dropdown from "components/common/Dropdown";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Header = (): JSX.Element => {
  const [isSetting, setIsSetting] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center">
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

      <div className="flex gap-6 items-center ">
        {/* <Link href="/">
          <button className="px-2 font-semibold duration-200 rounded-xl py-1 text-[16px] lg:px-5 lg:py-2 border mr-2 md:mr-5 ease-in cursor-pointer border-text-flaex-border">
            Connect Wallet
          </button>
        </Link> */}
        <Dropdown
          title="Connect Wallet"
          data={mockDataWallet}
          sizeIcon={22}
          classItem="p-2 cursor-pointer hover:text-flaex-primary duration-200 text-sm font-semibold"
          classTitle="px-2 font-semibold duration-200 rounded-xl py-1 text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border"
        />

        <Dropdown
          title={isSetting ? <FaTimes size={20} /> : <FaAlignRight size={20} />}
          data={mockDataSetting}
          width="[100px]"
          classItem="p-2 cursor-pointer hover:text-flaex-primary duration-200 text-xs"
          sizeIcon={13}
          bottomLength="-bottom-5"
        />
        {/* <div className="block cursor-pointer z-10">
          {isSetting ? <FaTimes size={20} /> : <FaAlignRight size={20} />}
        </div> */}
      </div>

      {/* Mobile Menu */}
    </div>
  );
};

export default Header;

const mockDataWallet = [
  { label: "MetaMask Wallet", icon: "/images/metamask_icon.png" },
  { label: "Coinbase Wallet", icon: "/images/coinbase_icon.png" },
];

const mockDataSetting = [
  { label: "Settings", icon: "/images/setting_icon.png" },
  { label: "Language", icon: "/images/global_icon.png" },
];
