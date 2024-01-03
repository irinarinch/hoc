import { nanoid } from 'nanoid';
import { IProps } from './Aggregation';
import DataHandler from "./DataHandler";

const YearTable = (props: IProps) => {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
          {props.list.map((item) => (
            <tr key={nanoid()}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataHandler(YearTable);
