import { useState } from "react";
import MonthTable from "./MonthTable";
import YearTable from "./YearTable";
import SortTable from "./SortTable";

import style from "./aggregation.module.css";

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json';
const response = await fetch(url);
const result = await response.json();

export type TData = {
  date: string,
  amount: number,
  year?: number,
  month?: string,
}

export type TYearTableData = {
  year: number,
  amount: number,
}

export interface IProps {
  list: TData[]
}

const Aggregation = () => {
  const [list] = useState(result.list);

  return (
    <div className={style.tables_container}>
      <MonthTable list={list} />
      <YearTable list={list} /> 
      <SortTable list={list} />
    </div>
  );
};

export default Aggregation;
