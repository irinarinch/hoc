import { TData } from "./List";
import style from "./highlight.module.css";
import wrap from "./wrap";

const Article = (props: TData) => {
  return (
    <div className={`${style.item} ${style["item-article"]}`}>
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className={style.views}>Прочтений: {props.views}</p>
    </div>
  );
};

export default wrap(Article);
