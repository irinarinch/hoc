import Video from './Video';
import { TData } from '../../App';

interface IList {
  list: TData[];
}

const VideoList = ({ list }: IList) => {
  return (
    list.map((item) => <Video data={item} />)
  )
}

export default VideoList;