import { useOutSideClick } from "hooks/useOutSideClick";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";

const classTitleDefault =
  "flex text-2xl font-semibold items-center gap-2 px-2 h-full";

const classItemDefault =
  "p-2 cursor-pointer hover:text-flaex-primary duration-200";

const Dropdown = ({
  sizeIcon = 24,
  title,
  isSearch = false,
  data,
  iconDown = false,
  classTitle = classTitleDefault,
  classItem = classItemDefault,
  width = "auto",
  bottomLength = "-bottom-2",
  handleOption,
}: {
  handleOption?: () => void;
  bottomLength?: string;
  sizeIcon?: number;
  classItem?: string;
  width?: number | string;
  iconDown?: boolean;
  title: string | JSX.Element;
  isSearch?: boolean;
  data: any;
  classTitle?: string;
}) => {
  const [selected, setSelected] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const componentRef = useOutSideClick(() => setIsOpen(false));

  return (
    <div ref={componentRef as any} className={`relative h-full`}>
      <div onClick={() => setIsOpen((prev) => !prev)} className={classTitle}>
        {selected && handleOption?.() ? selected.label : title}
        {iconDown && <FaAngleDown />}
      </div>

      <ul
        className={`${
          isOpen ? "max-h-60 border-[0.6px]" : "max-h-0"
        } absolute w-${width} translate-y-full ${bottomLength} right-0 bg-[#002453] overflow-y-auto duration-100 rounded`}
      >
        {isSearch && (
          <div className="flex items-center gap-2 p-2">
            <FaSearch size={sizeIcon} />
            <input
              type="text"
              placeholder="Enter your text..."
              className="outline-none bg-transparent"
            />
          </div>
        )}

        {data.map((item: any, idx: any) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className={classItem}
            >
              {item.icon ? (
                <div className="flex items-center gap-2">
                  <Image
                    width={sizeIcon}
                    height={sizeIcon}
                    objectFit="contain"
                    src={item.icon}
                    alt="flaex"
                  />
                  <span>{item.label}</span>
                </div>
              ) : (
                item.label
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
