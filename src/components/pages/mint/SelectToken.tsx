import AntSelect from "components/common/AntCommon/AntSelect";
import React from "react";

const SelectToken = ({ onSelectToken }) => {
  return (
    <div>
      <AntSelect
        options={[
          {
            label: <div className="text-flaex-heading text-[16px]">WETH</div>,
            value: 0,
          },
          {
            label: <div className="text-flaex-heading text-[16px]">DAI</div>,
            value: 1,
          },
        ]}
        _onhandleselection={onSelectToken}
        style={{ width: 90 }}
      />
    </div>
  );
};

export default SelectToken;
