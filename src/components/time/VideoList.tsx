import Video from "./Video";

export type TData = {
  url: string;
  date: string;
};

interface IList {
  list: TData[];
}

const VideoList = ({ list }: IList) => {
  return (
    <div className="video-container">
      {list.map((item) => (
        <Video key={item.date} data={item} />
      ))}
    </div>
  );
};

export default VideoList;
