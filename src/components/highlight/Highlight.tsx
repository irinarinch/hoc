import List from "./List";
import { useState } from "react";
import { secondTaskData } from "../../data";

import style from "./highlight.module.css";

const Highlight = () => {
  const [list] = useState(secondTaskData);

  return (
    <div className={style.container}>
      <List list={list} />
    </div>
  );
};

export default Highlight;