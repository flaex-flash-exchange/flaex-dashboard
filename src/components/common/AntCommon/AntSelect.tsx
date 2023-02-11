import { Select } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { mockSelectCoins } from "util/constants";

interface ISelectProps {
  options?: Array<any>;
  onSelection?: (item: any) => void;
}

const AntSelect = (props: ISelectProps) => {
  const { options = mockSelectCoins, onSelection } = props;

  const items = useMemo(() => {
    return options.map((item: any, idx: number) => {
      return {
        label: (
          <ItemOption
            style={{
              color: "white",
            }}
            key={idx}
          >
            {item?.label}
          </ItemOption>
        ),
        value: item?.value,
      };
    });
  }, [options]);

  return (
    <SelectWrapper>
      <Select
        defaultValue={items[0].value}
        style={{
          maxWidth: 120,
          direction: "ltr",
        }}
        onChange={onSelection}
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
        {...props}
      />
    </SelectWrapper>
  );
};

export default AntSelect;

const SelectWrapper = styled.div``;
const ItemOption = styled.span`
  color: whitesmoke;
  transition: all 0.3s ease-in-out;
  text-align: left;
  &:hover {
    color: rebeccapurple !important;
  }
`;
