import moment from "moment";

const DateTimePretty = () => {
  const string = "2023-12-28 10:39:00";
  let arr = string.split(/\ |\-|:/);
  arr[1] = (+arr[1] - 1).toString();

  const date = moment(arr).fromNow();
  return (
    <div>{date}</div>    
  )
};

export default DateTimePretty;
