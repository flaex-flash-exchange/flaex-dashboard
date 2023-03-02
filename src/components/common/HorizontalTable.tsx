import React from "react";

const HorizontalTable = ({
  totalRow,
  detailRows,
  colNumber,
}: {
  totalRow: any;
  detailRows: any;
  colNumber?: number;
}) => {
  return (
    <div className="bg-border-flaex h-full">
      <div className="flex justify-between text-[18px] font-semibold pt-3.5 pb-3 px-[19px] border-b-[0.2px] border-flaex-border-table ">
        <div>{totalRow.title}</div>
        <div className="font-bold">{totalRow.value}</div>
      </div>

      <div
        className={`pt-1 pb-[10px] px-[22px] ${
          colNumber > 1
            ? `grid grid-cols-${colNumber}  gap-x-5 md:gap-x-10 gap-y-2`
            : ""
        }`}
      >
        {detailRows.map((item: any, idx: any) => {
          if (item.children) {
            return (
              <div key={idx} className="mt-1.5">
                <div className="flex justify-between text-[16px] font-semibold">
                  <div>{item.title}</div>
                  <div className="font-bold">{item?.value}</div>
                </div>
                <div className="pl-3.5 mt-[5px]">
                  {item.children.map((itemChild: any, idxChild: any) => {
                    return (
                      <div
                        className="flex justify-between mt-1.5 font-light text-[14px]"
                        key={idxChild}
                      >
                        <div>{itemChild.title}</div>
                        <div className="font-normal">{itemChild.value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <div
              key={idx}
              className="flex justify-between mt-1.5 text-[16px] font-semibold"
            >
              <div
                className={`${
                  item.isSmallText ? "font-light text-[14px]" : ""
                }`}
              >
                {item.title}
              </div>
              <div className="font-bold">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalTable;
