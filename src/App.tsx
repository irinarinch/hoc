
import DateTimePretty from "./components/time/DateTimePretty";
import Time from "./components/time/Time";

// function DateTime(props) {
//   return <p className="date">{props.date}</p>;
// }
export type TData = {
  url: string;
  date: string;
}

export interface IProps {
  data: TData;
}


export default function App() {
  
return (
  <>
    <Time />
    <DateTimePretty />
  </>
)


  
}
