import { IProps } from "../../App";
import DateTime from "./DateTime";

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
  );
};

export default Video;
