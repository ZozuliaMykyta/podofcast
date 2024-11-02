import React, { createContext, useState } from "react";
import episodes6 from "../../img/home/episodes-1.jpeg";
import episodes5 from "../../img/home/episodes-2.jpeg";
import episodes4 from "../../img/home/episodes-3.jpeg";
import episodes3 from "../../img/home/episodes-4.jpeg";
import episodes2 from "../../img/home/episodes-5.jpeg";
import episodes1 from "../../img/home/episodes-6.jpeg";
import BigEpisodes1 from "../../img/home/episodes-6-big.jpeg";
import BigEpisodes2 from "../../img/home/episodes-5-big.jpeg";
import BigEpisodes3 from "../../img/home/episodes-4-big.jpeg";
import BigEpisodes4 from "../../img/home/episodes-3-big.jpeg";
import BigEpisodes5 from "../../img/home/episodes-2-big.jpeg";
import BigEpisodes6 from "../../img/home/episodes-1-big.jpeg";
import hosted from "../../img/home/episodes-hosted.svg";

export const EpisodesContext = createContext();

export const EpisodesProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 6,
      img: episodes6,
      BigImg: BigEpisodes6,
      episode: "Eps. 6",
      title: "Pandemic Becoming Endemic",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
      theme: ["covid-19", "health", "news"],
      hosted: hosted,
      time: 46,
    },
    {
      id: 5,
      img: episodes5,
      BigImg: BigEpisodes5,
      episode: "Eps. 5",
      title: "Tesla Autopilot Controversy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
      theme: ["automation", "tech", "business", "education"],
      hosted: hosted,
      time: 33,
    },
    {
      id: 4,
      img: episodes4,
      BigImg: BigEpisodes4,
      episode: "Eps. 4",
      title: "Women's Rights? Is it alright?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
      theme: ["women’s rights", "comedy"],
      hosted: hosted,
      time: 48,
    },
    {
      id: 3,
      img: episodes3,
      BigImg: BigEpisodes3,
      episode: "Eps. 3",
      title: "How to Deal with Self–Confidence",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
      theme: ["self-esteem", "healths"],
      hosted: hosted,
      time: 36,
    },
    {
      id: 2,
      img: episodes2,
      BigImg: BigEpisodes2,
      episode: "Eps. 2",
      title: "Type of Social Classes of People",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
      theme: ["social class", "wealth"],
      hosted: hosted,
      time: 29,
    },
    {
      id: 1,
      img: episodes1,
      BigImg: BigEpisodes1,
      episode: "Eps. 1",
      title: "Are you a Perplexed Mind Person?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
      theme: ["mind-behaviour", "health"],
      hosted: hosted,
      time: 15,
    },
  ]);

  return (
    <EpisodesContext.Provider value={{ data, setData }}>
      {children}
    </EpisodesContext.Provider>
  );
};
