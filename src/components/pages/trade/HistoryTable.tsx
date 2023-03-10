import { useContextTrade } from "context/TradeContext";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
type TableCustom = {
  data: any;
  titleRow: any;
};
const styleTitleColDefault =
  "py-2 px-3.5 text-center text-sm font-semibold tracking-wide  text-chipo-heading";
const styleColDefault = "px-3.5 py-[5px] text-center text-sm font-light";

const HistoryTable = ({ data, titleRow }: TableCustom): JSX.Element => {
  const { isShowLong, setIsShowLong } = useContextTrade();

  const handleClickRow = useCallback(
    (data: any) => {
      if (data.direction.toLowerCase() === "long") {
        setIsShowLong(true);
      } else {
        setIsShowLong(false);
      }
    },
    [setIsShowLong],
  );

  const handleActiveRow = (data: any) => {
    if (isShowLong === undefined) return;

    if (data.direction.toLowerCase() === "long" && isShowLong) {
      return "bg-flaex-primary bg-opacity-50";
    }
    if (data.direction.toLowerCase() === "short" && !isShowLong) {
      return "bg-flaex-primary bg-opacity-50";
    }
  };

  return (
    <table className="w-full border-[0.2px] border-flaex-border rounded-[10px] py-[8px]">
      <thead className="">
        <tr className="">
          {titleRow.map((col: any, idx: number) => {
            const styleTitleCol = twMerge(
              styleTitleColDefault,
              col.classNameCustom || "",
            );
            return (
              <th className={styleTitleCol} key={idx}>
                {col.title}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className="">
        {data.map((row: any, idx: number) => (
          <tr
            key={idx}
            className={`hover:bg-flaex-primary hover:bg-opacity-30 ${handleActiveRow(
              row,
            )} cursor-pointer`}
            onClick={() => handleClickRow(row)}
          >
            {titleRow.map((col: any, idx: number) => {
              const styleCol = twMerge(
                styleColDefault,
                col.classNameCustom || "",
              );

              return (
                <td className={styleCol} key={idx}>
                  {typeof col.field === "string" ? (
                    <div>{row[col.field]}</div>
                  ) : (
                    col.field(row, col.field)
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;
