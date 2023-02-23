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
  const {
    setIsShowLong,
    isShowLong = false,
    setRepayClodeData,
  } = useContextTrade();
  const [isActiveRow, setIsActiveRow] = useState(2);

  const handleClickRow = useCallback(
    (index: number, data: any) => {
      setIsActiveRow(index);
      setIsShowLong(false);
      setRepayClodeData(data);
    },
    [setIsShowLong, setRepayClodeData],
  );

  const _onActiveRow = (
    isLong: boolean,
    isRowSelected: number,
    index: number,
  ) =>
    isLong
      ? ""
      : isRowSelected === index
      ? "bg-flaex-primary bg-opacity-50"
      : "";

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
        {data.map((row: any, idx: number) => {
          // console.log({ row });

          return (
            <tr
              key={idx}
              className={`hover:bg-flaex-primary hover:bg-opacity-30 ${_onActiveRow(
                isShowLong,
                isActiveRow,
                idx,
              )} cursor-pointer`}
              onClick={() => handleClickRow(idx, row)}
            >
              {titleRow.map((col: any, idx: number) => {
                const styleCol = twMerge(
                  styleColDefault,
                  col.classNameCustom || "",
                );
                // console.log("{ col }", typeof col.field);

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
          );
        })}
      </tbody>
    </table>
  );
};

export default HistoryTable;
