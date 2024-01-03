import VideoList from "./VideoList";
import { useState } from "react";
import { firstTaskData } from "../../data";

const Time = () => {
  const [list] = useState(firstTaskData);

  return <VideoList list={list} />;
};

export default Time;
