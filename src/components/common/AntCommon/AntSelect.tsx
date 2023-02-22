import { Select } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { mockSelectCoins } from "util/constants";

interface ISelectProps {
  options?: Array<any>;
  width?: number;
  style?: any;
  optionStyle?: any;
  _onhandleselection?: (item: any) => void;
}

const AntSelect = (props: ISelectProps) => {
  const {
    options = mockSelectCoins,
    _onhandleselection,
    width = 120,
    style,
    optionStyle,
  } = props;

  const items = useMemo(() => {
    return options.map((item: any, idx: number) => {
      return {
        label: (
          <ItemOption
            style={{
              color: "white",
              ...optionStyle,
            }}
            key={idx}
          >
            {item?.label}
          </ItemOption>
        ),
        value: item?.value,
      };
    });
  }, [optionStyle, options]);

  return (
    <Select
      defaultValue={items[0].value}
      style={{
        maxWidth: width,
        direction: "ltr",
        ...style,
      }}
      onChange={_onhandleselection}
      options={items}
      suffixIcon={
        <FaAngleDown
          style={{
            color: "white",
            fontSize: 18,
            marginRight: "-10px",
          }}
        />
      }
    />
  );
};

export default AntSelect;

const ItemOption = styled.span`
  color: whitesmoke;
  transition: all 0.3s ease-in-out;
  text-align: left;
  &:hover {
    color: rebeccapurple !important;
  }
`;
