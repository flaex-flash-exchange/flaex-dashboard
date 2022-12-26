/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggleCollapse }: { toggleCollapse: boolean }) => {
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
        ["text-white"]: activeMenu?.id === menu.id,
        ["text-[#828282] pointer-events-none"]: menu.disabled === true,
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
        className={`ease-in duration-300 absolute md:relative md:bg-transparent h-full md:h-auto w-[150px] z-50${
          toggleCollapse ? "-left-full md:left-0" : "left-0"
        } `}
        // onMouseEnter={handleOnMouse}
        // onMouseLeave={handleOnMouse}
      >
        <div className="relative z-[12]">
          <div className="py-[17px] block ease-in duration-200">
            <FaTimes size={20} />
          </div>

          <div>
            {menuItems.map((menu) => {
              const classes = getNavItemClasses(menu);
              return (
                <div key={menu.id} className={`${classes}`}>
                  <Link href={menu.link}>
                    <a className="w-full h-full py-[17px] block ease-in duration-200">
                      {menu.label}
                    </a>
                  </Link>
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
  { id: 1, label: "Dashboard", icon: "", link: "/" },
  { id: 2, label: "Trade", icon: "", link: "/trade" },
  {
    id: 3,
    label: "My positions",
    icon: "",
    link: "/my-positions",
  },
  {
    id: 4,
    label: "Invest",
    icon: "",
    link: "/invest",
  },
  {
    id: 5,
    label: "Staking",
    icon: "",
    link: "/staking",
  },
];
