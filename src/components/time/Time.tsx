import VideoList from "./VideoList";
import { useState } from "react";
import { data } from "./data";

const Time = () => {
  const [list] = useState(data);

  return <VideoList list={list} />;
};

export default Time;
