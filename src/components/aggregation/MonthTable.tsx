import { nanoid } from "nanoid";
import { IProps } from "./Aggregation";
import DataHandler from "./DataHandler";

const MonthTable = (props: IProps) => {
  const filtered = props.list.filter((i) => i.year === 2018);
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
          {filtered.map((item) => (
            <tr key={nanoid()}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataHandler(MonthTable);
