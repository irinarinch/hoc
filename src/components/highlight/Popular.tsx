import { ReactElement } from "react";
import style from "./highlight.module.css";

const Popular = (props: { children: ReactElement }) => {
  return (
    <div className={`${style["wrap-item"]} ${style["wrap-item-popular"]}`}>
      <span className={style.label}>Popular!</span>
      {props.children}
    </div>
  );
};

export default Popular;
