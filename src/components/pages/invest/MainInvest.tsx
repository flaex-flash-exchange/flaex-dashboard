import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const MainInvest = () => {
  return (
    <div className="flex gap-8 mt-3.5">
      <div className="flex-1">
        <LeftContent />
      </div>
      <div className="flex-1">
        <RightContent />
      </div>
    </div>
  );
};

export default MainInvest;
