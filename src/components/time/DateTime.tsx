import { IProps } from "../../App";

const DateTime = ({ data } : IProps) => {
  const { date } = data;

  return <p className="date">{date}</p>;
};

export default DateTime;


// import { Component } from 'react';
// interface IProps {
//   list: TData[];
// }

// export default class DateTime extends Component<IProps> {
//   constructor(props: IProps) {
//     super(props);
//   }

//   render() {
//     return (
//       this.props.list.map((item) => <Video url={item.url} date={item.date} />)
//     )
//   }
// }