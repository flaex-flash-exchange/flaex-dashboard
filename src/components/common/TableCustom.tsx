type TableCustom = {
  data: any;
  titleRow: any;
};

const TableCustom = ({ data, titleRow }: TableCustom): JSX.Element => {
  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          {titleRow.map((col: any, idx: number) => (
            <th
              className="p-3 text-sm font-semibold tracking-wide text-left text-chipo-heading"
              key={idx}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, idx: number) => (
          <tr
            key={idx}
            className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}  `}
          >
            {titleRow.map((col: any, idx: number) => (
              <td className="p-3 text-sm text-gray-700" key={idx}>
                {typeof col.field === "string" ? (
                  <div>{row[col.field]}</div>
                ) : (
                  <div>{col.field(row)}</div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCustom;
