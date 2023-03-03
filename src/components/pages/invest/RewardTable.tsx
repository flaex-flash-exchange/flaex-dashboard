import React from "react";

const RewardTable = ({
  totalRow,
  detailRows,
}: {
  totalRow: any;
  detailRows: any;
}) => {
  return (
    <div className="bg-border-flaex">
      <div className="flex justify-between text-[18px] font-semibold pt-3.5 pb-3 px-[19px] border-b-[0.2px] border-flaex-border-table ">
        <div>{totalRow.title}</div>
        <div className="font-bold">{`${totalRow.value.toFixed(2)} $`}</div>
      </div>

      <div className="pt-1 pb-[10px] px-[22px]">
        {detailRows.map((item: any, idx: any) => {
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
              <div className="font-bold">{`${item.value.toFixed(4)} (${item.netValue.toFixed(4)} $)`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RewardTable;
