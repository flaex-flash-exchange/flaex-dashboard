import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const Mainbar = () => {
  return (
    <div className="rounded-[10px] border-[0.2px] h-full px-4 py-3">
      Leverage
      <Slider />
    </div>
  );
};

export default Mainbar;
