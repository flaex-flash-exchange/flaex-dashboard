import Dropdown from "components/common/Dropdown";
import { useModalContext } from "context/ModalContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Header = (): JSX.Element => {
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const { pushModal } = useModalContext();
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

        {/* <Dropdown
          title="Connect Wallet"
          data={mockDataWallet}
          sizeIcon={22}
          classItem="p-2 cursor-pointer hover:text-flaex-primary duration-200 text-sm font-semibold"
          classTitle="px-2 font-semibold duration-200 rounded-xl py-1 text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border"
        /> */}

        <button
          className="px-2 font-semibold duration-200 rounded-xl py-1 text-[18px] lg:px-6 lg:py-2 border ease-in cursor-pointer border-text-flaex-border"
          onClick={() => pushModal(<ModalConnectWallet />)}
        >
          Connect Wallet
        </button>

        <Dropdown
          title={isSetting ? <FaTimes size={20} /> : <FaAlignRight size={20} />}
          data={mockDataSetting}
          width={"min-w-[120px]"}
          classItem="p-2 cursor-pointer hover:text-flaex-primary duration-200 text-sm"
          sizeIcon={18}
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

const ModalConnectWallet = () => {
  const { closeModals } = useModalContext();

  const handleSelectedWallet = (typeWallet: string) => {
    closeModals();
    console.log(typeWallet);
  };

  return (
    <div className="min-w-[180px]">
      <div className="text-lg font-light">Connect With</div>
      <div className="grid gap-2.5 mt-6">
        {mockDataWallet.map((item, idx) => (
          <button
            onClick={() => handleSelectedWallet(item.value)}
            className="flex w-full items-center hover:bg-flaex-bg-hover hover:bg-opacity-50 rounded-[10px] px-2 py-1"
            key={idx}
          >
            <Image width={32} height={32} objectFit="contain" src={item.icon} />
            <span className="ml-2 cursor-pointer duration-200 text-base font-semibold">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const mockDataWallet = [
  {
    value: "metamask",
    label: "MetaMask Wallet",
    icon: "/images/metamask_icon.png",
  },
  {
    value: "coinbase",
    label: "Coinbase Wallet",
    icon: "/images/coinbase_icon.png",
  },
];

const mockDataSetting = [
  {
    label: "Settings",
    icon: "/images/setting_icon.png",
    elementModal: () => <div>Setting</div>,
  },
  {
    label: "Language",
    icon: "/images/global_icon.png",
    elementModal: () => <div>Language</div>,
  },
];
