import Article from "./Article";
import Video from "./Video";

export type TData = {
  type: string,
  url?: string,
  title?: string,
  views: number,
}

interface IListProps {
  list: TData[],
}

const List = (props: IListProps) => {
  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        return <Video key={item.title || item.url} {...item} />;
      case "article":
        return <Article key={item.title || item.url} {...item} />;
    }
  });
};

export default List;
