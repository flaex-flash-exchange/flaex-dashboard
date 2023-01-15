import Slider from "rc-slider";
import React from "react";
import { handleRender } from "./TooltipSlider";

const marks = {
  0: <strong>0</strong>,
  100: "100%",
  200: "200%",
  300: "300%",
  400: "400%",
  500: "500%",
  600: "600%",
  700: "700%",
  800: "800%",
  900: "900%",
  1000: {
    style: {
      color: "red",
    },
    label: <strong>1000%</strong>,
  },
};

const SliderCustom = () => {
  return (
    <div>
      <Slider
        min={0}
        marks={marks}
        defaultValue={0}
        max={1000}
        handleRender={handleRender}
      />
    </div>
  );
};

export default SliderCustom;
