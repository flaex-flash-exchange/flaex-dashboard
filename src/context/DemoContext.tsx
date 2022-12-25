import { createContext, useEffect, useState } from "react";

export type ProductListContextType = {
  [key: string]:
    | number
    | string
    | ((value: string) => void)
    | { [key: string]: any }[]
    | undefined;
  setFilterValue: (value: string) => void;
  setSortByValue: (value: string) => void;
  setSearchValue: (value: string) => void;
  outputData: { [key: string]: any }[] | undefined;
};
export const ProductListContext = createContext<ProductListContextType | null>(
  null,
);

type ProductListProviderType = {
  children: JSX.Element;
  data: { [key: string]: any }[];
};

export const ProductListProvider = ({
  children,
  data,
}: ProductListProviderType) => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [sortByValue, setSortByValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const [outputData, setOutPutData] = useState<
    { [key: string]: any }[] | undefined
  >(data);

  useEffect(() => {
    let newData = [...data];

    if (filterValue) {
      newData = data.filter((item) => item.category === filterValue);
    }

    if (sortByValue) {
      switch (sortByValue) {
        case "high":
          newData = newData.slice().sort((a, b) => {
            return b.price - a.price;
          });

          break;
        case "low":
          newData = newData.slice().sort((a, b) => {
            return a.price - b.price;
          });
          break;
        default:
          newData = [...newData];
      }
    }

    if (searchValue) {
      const resultData = newData.filter((item) =>
        item.productName
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()),
      );

      if (resultData) {
        newData = resultData;
      }
    }

    return setOutPutData(newData);
  }, [filterValue, sortByValue, searchValue, data]);
  return (
    <ProductListContext.Provider
      value={{ setFilterValue, setSortByValue, setSearchValue, outputData }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
