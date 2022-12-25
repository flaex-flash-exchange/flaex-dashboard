import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = (): JSX.Element => {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    // return window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-50 ease-in duration-200 ${
        isScroll ? "bg-chipo-bg-primary shadow-md" : "text-white bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1240px] m-auto flex justify-between items-center ease-in  ${
          isScroll ? "p-4" : "p-4 md:px-4 md:py-8"
        }`}
      >
        <Link href="/">
          <h1
            className={`font-extralight text-2xl font-iCielAlina cursor-pointer ease-in duration-200 ${
              isScroll ? "lg:text-3xl" : "lg:text-4xl"
            }`}
          >
            Vietnamese Restaurant
          </h1>
        </Link>

        <ul
          className={`hidden md:flex md:flex-1 justify-center font-montserrat font-semibold ease-in text-base ${
            isScroll ? "lg:text-base" : "lg:text-lg"
          }`}
        >
          {menuData.map((list) => (
            <li
              key={list.id}
              className="px-3 lg:px-4 py-2 ease-in font-montserrat duration-200 hover:scale-105"
            >
              <Link href="/">{list.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="flex gap-2 items-center">
          <Link href="/shop">
            <button
              className={`px-2 font-semibold duration-200 rounded-md py-1 text-[16px] lg:px-4 lg:py-2 border  mr-2 md:mr-5 ease-in cursor-pointer ${
                isScroll
                  ? "bg-chipo-text hover:bg-chipo-hover-text border-white text-chipo-bg-primary"
                  : "bg-chipo-bg-primary hover:bg-chipo-bg-hover border-chipo-text"
              }`}
            >
              Book a table
            </button>
          </Link>
          <div
            className="block md:hidden cursor-pointer z-10"
            onClick={handleNav}
          >
            {nav ? (
              <AiOutlineClose
                size={20}
                className={`${isScroll ? "text-chipo-heading" : "white"}`}
              />
            ) : (
              <AiOutlineMenu
                size={20}
                className={`${isScroll ? "text-chipo-heading" : "white"}`}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-chipo-text text-center ease-in duration-300 ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            {menuData.map((list) => (
              <li
                key={list.id}
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/">{list.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

const menuData = [
  { name: "Menu", id: 1 },
  { name: "Shop", id: 2 },
  { name: "Community", id: 3 },
  { name: "Our Story", id: 4 },
  { name: "Contact", id: 5 },
];
