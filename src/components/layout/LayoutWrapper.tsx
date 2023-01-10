import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutWrapper = ({ children }: { children: any }): JSX.Element => {
  return (
    <div className="min-h-[900px] flex flex-col justify-between">
      <div className="pl-12 pr-24 pt-8">
        <Header />
        <div className="flex justify-between mt-16">
          <Sidebar />
          <div className="flex-1 flex flex-col p-2">{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
