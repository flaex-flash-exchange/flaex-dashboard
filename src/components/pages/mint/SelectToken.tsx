import AntSelect from "components/common/AntCommon/AntSelect";
import React from "react";

const SelectToken = (onSelectToken) => {
  return (
    <div>
      <AntSelect
        options={[
          {
            label: <div className="text-flaex-heading text-[16px]">WETH</div>,
            value: "weth",
          },
          {
            label: <div className="text-flaex-heading text-[16px]">DAI</div>,
            value: "dai",
          },
        ]}
        _onhandleselection={onSelectToken}
      />
    </div>
  );
};

export default SelectToken;
