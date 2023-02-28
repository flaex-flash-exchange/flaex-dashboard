import Dropdown from "components/common/Dropdown";
import ModalLanguageWallet from "components/modal/ModalLanguageWallet";
import ModalSetting from "components/modal/ModalSetting";
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
          <div className="relative w-14 h-14 md:w-[60px] md:h-[60px] mr-2">
            <Image src="/images/logo.svg" alt="logo" layout="fill" />
          </div>
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
