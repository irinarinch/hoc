import DateTimePretty from "./DateTimePretty";
import { IProps } from "./Video";

const DateTime = ({ data }: IProps) => {
  return <p className="date">{data.date}</p>;
}

export default DateTimePretty(DateTime);