import Dropdown from "components/common/Dropdown";
import { useModalContext } from "context/ModalContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignRight, FaAngleDoubleRight, FaTimes } from "react-icons/fa";
import { CustomedRainbowConnect } from "./CustomedRainbowConnect";

const Header = ({ toggleCollapse, onChangeToggle }: any): JSX.Element => {
  const [isSetting] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center">
      <div
        className="py-[17px] block md:hidden ease-in duration-200"
        onClick={() => onChangeToggle()}
      >
        {toggleCollapse ? (
          <FaTimes size={25} />
        ) : (
          <FaAngleDoubleRight size={25} />
        )}
      </div>

      <Link href={"/"}>
        <a className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-[60px] md:h-[60px] mr-2"
          />
          <span
            className={`text-[28px] md:text-[30px] leading-[50px] tracking-[3px]`}
          >
            flæx
          </span>
        </a>
      </Link>

      <div className="flex gap-2 md:gap-6 items-center ">
        <CustomedRainbowConnect />
        <Dropdown
          title={isSetting ? <FaTimes size={20} /> : <FaAlignRight size={20} />}
          data={mockDataSetting}
          width={"min-w-[120px]"}
          classItem="py-2 px-4 cursor-pointer hover:text-flaex-primary duration-200 text-sm"
          sizeIcon={18}
          bottomLength="-bottom-5"
        />
      </div>
    </div>
  );
};

export default Header;

const ModalLanguageWallet = () => {
  const { closeModals } = useModalContext();

  const handleSelectedLanguage = (typeLanguage: string) => {
    closeModals();
  };

  return (
    <div className="min-w-[180px]">
      <div className="text-lg font-light">Select Language</div>
      <div className="grid gap-2.5 mt-6">
        {mockDataLanguage.map((item, idx) => (
          <button
            onClick={() => handleSelectedLanguage(item.value)}
            className="flex w-full items-center hover:bg-flaex-bg-hover hover:bg-opacity-50 rounded-[10px] px-2 py-1"
            key={idx}
          >
            <Image
              width={32}
              height={32}
              objectFit="contain"
              src={item.icon}
              alt=""
            />
            <span className="ml-2 cursor-pointer duration-200 text-base font-semibold">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const ModalSetting = () => {
  const { closeModals } = useModalContext();
  const [slippageValue, setSlippageValue] = useState();
  const [telegramValue, setTelegramValue] = useState("@luciuskrypt");

  const handleSubmitSetting = () => {
    closeModals();
  };

  return (
    <div className="min-w-[180px]">
      <div className="text-lg font-light">Settings</div>

      <div className="mt-6">
        <div>
          <div className="text-sm font-light">Allowed Slippage</div>
          <div className="flex items-center pr-2 justify-between mt-1.5 bg-flaex-bg-hover bg-opacity-50 ">
            <input
              className="bg-transparent w-full outline-none py-1 px-2"
              type="text"
              value={slippageValue}
              onChange={(e: any) => setSlippageValue(e.target.value)}
            />
            <div>%</div>
          </div>
        </div>

        <div>
          <div className="text-base font-light mt-2">Change Telegram</div>
          <div className="pr-2 mt-1.5 bg-flaex-bg-hover bg-opacity-50 ">
            <input
              className="bg-transparent w-full outline-none py-1 px-2"
              type="text"
              value={telegramValue}
              onChange={(e: any) => setTelegramValue(e.target.value)}
            />
            <div className="text-right text-xs font-extralight">
              Current Telegram Handle
            </div>
            <div className="text-[10px] font-normal text-right">
              @luciuskrypt
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSubmitSetting()}
            className=" w-full bg-flaex-button text-center hover:bg-flaex-hover-text hover:bg-opacity-80 duration-300 rounded px-2 py-1"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const mockDataLanguage = [
  {
    value: "vietnam",
    label: "VietNamese",
    icon: "/images/vietnam.png",
  },
  {
    value: "english",
    label: "English",
    icon: "/images/united-kingdom.png",
  },
];

const mockDataSetting = [
  {
    label: "Settings",
    icon: "/images/setting_icon.png",
    elementModal: () => <ModalSetting />,
  },
  {
    label: "Language",
    icon: "/images/global_icon.png",
    elementModal: () => <ModalLanguageWallet />,
  },
];
