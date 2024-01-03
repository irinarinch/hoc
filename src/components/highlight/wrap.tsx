import { FC } from "react";
import { TData } from "./List";
import New from "./New";
import Popular from "./Popular";

const wrap = (Component: FC<TData>) => {
  return function (props: TData) {
    const { views } = props;

    if (views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }

    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }

    return <Component {...props} />;
  };
};

export default wrap;
