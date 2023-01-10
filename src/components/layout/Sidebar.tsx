/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import {
  FaAngleDoubleRight,
  FaChartPie,
  FaDonate,
  FaExchangeAlt,
  FaHandHoldingUsd,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const router = useRouter();
  const [toggleCollapse, setToggleCollapse] = useState(true);

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

  const getNavSubItemClasses = (submenu: any) => {
    return classNames(
      "cursor-pointer text-[18px] rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["text-white"]: activeMenu?.id === submenu.id,
        ["text-[#828282] pointer-events-none"]: submenu.disabled === true,
      },
    );
  };

  return (
    <>
      <div
        className={`ease-in duration-300 absolute md:relative md:bg-transparent h-full md:h-auto w-[150px] z-50 ${
          toggleCollapse ? "w-[150px]" : "w-[50px]"
        } `}
        // onMouseEnter={handleOnMouse}
        // onMouseLeave={handleOnMouse}
      >
        <div className="relative z-[12]">
          <div
            className="py-[17px] block ease-in duration-200"
            onClick={() => setToggleCollapse((prev) => !prev)}
          >
            {toggleCollapse ? (
              <FaTimes size={25} />
            ) : (
              <FaAngleDoubleRight size={25} />
            )}
          </div>

          <div>
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const menuItems = [
  { id: 1, label: "Dashboard", icon: <FaChartPie />, link: "/" },
  { id: 2, label: "Trade", icon: <FaExchangeAlt />, link: "/trade" },
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
];
