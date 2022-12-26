import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutWrapper = ({ children }: { children: any }): JSX.Element => {
  const [toggleCollapse, setToggleCollapse] = useState(true);
  return (
    <div className="min-h-[900px] flex flex-col justify-between">
      <div className="pl-12 pr-24 pt-8">
        <Header
          setToggleCollapse={setToggleCollapse}
          toggleCollapse={toggleCollapse}
        />
        <div className="flex justify-between mt-16">
          <Sidebar toggleCollapse={toggleCollapse} />
          <div className="flex-1 p-2">{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
