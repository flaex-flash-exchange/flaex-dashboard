import { useModalContext } from "context/ModalContext";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutWrapper = ({ children }: { children: any }): JSX.Element => {
  const { modals } = useModalContext();
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const handleChangeToggle = () => {
    setToggleCollapse((prev) => !prev);
  };

  return (
    <div className="min-h-[900px] flex flex-col justify-between">
      <div className="flex flex-col flex-1 px-3 pt-5 md:px-4 md:py-8 lg:px-12 xl:px-12 2xl:px-24 h-full">
        <Header
          toggleCollapse={toggleCollapse}
          onChangeToggle={handleChangeToggle}
        />
        <div className="flex-1 md:flex justify-between mt-10 md:mt-16 h-full">
          <Sidebar
            toggleCollapse={toggleCollapse}
            onChangeToggle={handleChangeToggle}
          />
          <div className="flex-1 flex flex-col p-0 md:p-2 md:pb-7 lg:p-2 lg:pb-7 xl:p-2 xl:pb-7 2xl:p-2 2xl:pb-7 h-full">
            {children}
          </div>
        </div>
      </div>
      <Footer />
      {modals}
    </div>
  );
};

export default LayoutWrapper;
