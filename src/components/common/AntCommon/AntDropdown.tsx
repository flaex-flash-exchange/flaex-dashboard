import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { FaAngleDown } from "react-icons/fa";
import { DropdownProps } from "antd";

interface IDropDownProps extends DropdownProps {
  options: Array<any>;
  title?: string;
}

const AntDropDown = (props: IDropDownProps) => {
  const { options, title = "select option" } = props;

  const items: MenuProps["items"] = options;

  return (
    <Dropdown
      placement="bottom"
      arrow={{ pointAtCenter: true }}
      menu={{ items }}
      trigger={["click"]}
      {...props}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="overflow-hidden truncate w-32"> {title}</div>
        <FaAngleDown />
      </div>
    </Dropdown>
  );
};

export default AntDropDown;
