import Slider from "rc-slider";
import React, { useState } from "react";

const LongShort = () => {
  const [isLong, setIsLong] = useState<boolean>(true);

  return (
    <div>
      <div className="flex text-base font-semibold bg-flaex-border bg-opacity-5 rounded-[10px]">
        <button
          onClick={() => setIsLong(true)}
          className={`flex-1 ${
            isLong ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          Long
        </button>

        <button
          onClick={() => setIsLong(false)}
          className={`flex-1 ${
            !isLong ? "bg-flaex-button" : ""
          } text-base py-2.5 rounded-[10px]`}
        >
          Short
        </button>
      </div>

      <div className="mt-[22px]">
        <div>Leverage</div>
        <div className="mt-2">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default LongShort;
