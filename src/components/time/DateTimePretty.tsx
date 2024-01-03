import { IProps } from "./Video";
import { TData } from "./VideoList";
import { FC } from "react";
import moment from "moment";

const DateTimePretty = ( Component: FC<IProps> ) => {
  return function ({ data }: IProps) {
    const { date, ...otherProps } = data;
    const arr = date.split(/ |-|:/);

    arr[1] = (+arr[1] - 1).toString();

    const formated = moment(arr).fromNow();
    const newData: TData = {
      ...otherProps,
      date: formated,
    };

    return <Component data={newData} />;
  }; 
};

export default DateTimePretty;