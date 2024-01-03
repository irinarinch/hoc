import DateTime from "./DateTime";
import { TData } from "./VideoList";

export interface IProps {
  data: TData;
}

const Video = ({ data }: IProps) => {
  return (
    <div className="video">
      <iframe
        src={data.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTime data={data} />
    </div>
  )
};

export default Video;
