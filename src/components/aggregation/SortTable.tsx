import { nanoid } from "nanoid";
import { IProps } from "./Aggregation";
import DataHandler from "./DataHandler";

const SortTable = (props: IProps) => {
  props.list.sort((a, b) => b.amount - a.amount);

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          {props.list.map((item) => (
            <tr key={nanoid()}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataHandler(SortTable);
