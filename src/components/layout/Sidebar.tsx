/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import {
  FaAngleDoubleRight,
  FaChartBar,
  FaChartPie,
  FaCoins,
  FaDonate,
  FaExchangeAlt,
  FaHandHoldingUsd,
  FaMapMarkerAlt,
  FaRegTimesCircle,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ toggleCollapse, onChangeToggle }: any) => {
  const router = useRouter();

  const activeMenu = useMemo(() => {
    for (const menu of menuItems) {
      if (menu.link === router.pathname) return menu;
    }
  }, [router.pathname]);

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "cursor-pointer text-[18px] rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["text-flaex-primary"]: activeMenu?.id === menu.id,
        ["text-[#828282] pointer-events-none"]: menu.disabled === true,
        ["text-[25px]"]: !toggleCollapse,
      },
    );
  };

  // const getNavSubItemClasses = (submenu: any) => {
  //   return classNames(
  //     "cursor-pointer text-[18px] rounded w-full overflow-hidden whitespace-nowrap",
  //     {
  //       ["text-white"]: activeMenu?.id === submenu.id,
  //       ["text-[#828282] pointer-events-none"]: submenu.disabled === true,
  //     },
  //   );
  // };

  return (
    <div className="">
      <div
        className={`fixed -left-full bottom-0 top-0 md:top-auto md:bottom-auto md:left-auto w-full ease-in duration-300 md:relative bg-flaex-linear md:bg-transparent h-full md:h-auto z-50 ${
          toggleCollapse ? "left-0 md:w-[150px] px-10 md:px-0" : "md:w-[50px]"
        } `}
        // onMouseEnter={handleOnMouse}
        // onMouseLeave={handleOnMouse}
      >
        <div className="relative z-[12] h-full">
          <div
            className="py-[17px] hidden md:block ease-in duration-200"
            onClick={() => onChangeToggle()}
          >
            {toggleCollapse ? (
              <FaTimes size={25} />
            ) : (
              <FaAngleDoubleRight size={25} />
            )}
          </div>

          <div className="hidden md:block">
            {menuItems.map((menu) => {
              const classes = getNavItemClasses(menu);
              return (
                <div key={menu.id}>
                  <div className={classes}>
                    <Link href={menu.link}>
                      <a className="w-full h-full py-[17px] block ease-in duration-200 ">
                        {toggleCollapse ? menu.label : menu.icon}
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {toggleCollapse && (
            <>
              <button
                className="md:hidden absolute top-10 right-0"
                onClick={() => onChangeToggle()}
              >
                <FaRegTimesCircle size={25} />
              </button>

              <div className="flex flex-col py-20 md:hidden h-full justify-between">
                <div>
                  {menuItems.map((menu) => {
                    const classes = getNavItemClasses(menu);
                    return (
                      <div key={menu.id}>
                        <div className={classes}>
                          <Link href={menu.link}>
                            <a
                              className="w-full h-full py-[17px] ease-in duration-200 text-[18px] flex items-center"
                              onClick={() => onChangeToggle()}
                            >
                              <span className="mr-4 text-[25px]">
                                {menu.icon}
                              </span>{" "}
                              {menu.label}
                            </a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4 items-end justify-center">
                  <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="w-20 h-20 md:w-[60px] md:h-[60px] mr-2"
                  />
                  <span
                    className={` text-[40px] md:text-[30px] leading-[50px] tracking-[3px]`}
                  >
                    flæx
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const menuItems = [
  { id: 1, label: "Dashboard", icon: <FaChartPie />, link: "/" },
  { id: 2, label: "Trade", icon: <FaChartBar />, link: "/trade" },
  {
    id: 3,
    label: "My positions",
    icon: <FaMapMarkerAlt />,
    link: "/my-positions",
  },
  {
    id: 4,
    label: "Invest",
    icon: <FaHandHoldingUsd />,
    link: "/invest",
  },
  {
    id: 5,
    label: "Staking",
    icon: <FaDonate />,
    link: "/staking",
  },
  {
    id: 6,
    label: "Swap",
    icon: <FaExchangeAlt />,
    link: "/swap",
  },
  {
    id: 7,
    label: "Mint",
    icon: <FaCoins />,
    link: "/mint",
  },
];
