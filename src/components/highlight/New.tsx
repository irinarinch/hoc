import { ReactElement } from "react";
import style from "./highlight.module.css";

const New = (props: { children: ReactElement }) => {
  return (
    <div className={`${style["wrap-item"]} ${style["wrap-item-new"]}`}>
      <span className={style.label}>New!</span>
        {props.children}
    </div>
  );
};

export default New;
