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
      <div className="px-3 pt-5 md:px-4 md:py-8 lg:px-12 xl:px-12 2xl:px-24 h-full">
        <Header
          toggleCollapse={toggleCollapse}
          onChangeToggle={handleChangeToggle}
        />
        <div className="md:flex justify-between mt-10 md:mt-16 h-full">
          <Sidebar
            toggleCollapse={toggleCollapse}
            onChangeToggle={handleChangeToggle}
          />
          <div className="flex-1 flex flex-col p-2 pb-7">{children}</div>
        </div>
      </div>

      <Footer />

      {modals}
    </div>
  );
};

export default LayoutWrapper;
