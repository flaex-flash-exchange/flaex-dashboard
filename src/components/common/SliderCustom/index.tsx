import Slider from "rc-slider";
import React from "react";
import { handleRender } from "./TooltipSlider";

const SliderCustom = ({ value, onChangeValue, disabled, marks, max }: any) => {
  return (
    <div>
      <Slider
        min={0}
        marks={marks}
        defaultValue={0}
        max={max}
        handleRender={handleRender}
        value={value}
        onChange={onChangeValue}
        disabled={disabled}
      />
    </div>
  );
};

export default SliderCustom;
