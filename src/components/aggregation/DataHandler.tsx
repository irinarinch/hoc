import { FC } from "react";
import { IProps } from "./Aggregation";
import { TData } from "./Aggregation";

const DataHandler = (Component: FC<IProps>) => {
  function compare(a: TData, b: TData) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
  
    return Number(dateB) - Number(dateA);
  }

  return function (props: IProps) {
    const { list } = props;
    const newData = list.sort(compare);

    newData.forEach((item) => {
      const currentDate = new Date(item.date);
      item.year = currentDate.getFullYear();
      item.month = currentDate.toLocaleString("en-GB", { month: "short" });
    });

    const newList: IProps = {
      list: newData,
    };

    return <Component list={newList.list} />;
  };
};

export default DataHandler;
