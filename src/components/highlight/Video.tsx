import { TData } from "./List";

import style from "./highlight.module.css";
import wrap from "./wrap";

const Video = (props: TData) => {
  return (
    <div className={`${style.item} ${style["item-video"]}`}>
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className={style.views}>Просмотров: {props.views}</p>
    </div>
  );
};

export default wrap(Video);