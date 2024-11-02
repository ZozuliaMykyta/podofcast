import React from "react";
import Presentation from "../components/Home/Presentation";
import Podcasts from "../components/Home/Podcasts";
import Support from "../components/Home/Support";
import Pleasure from "../components/Home/Pleasure";
import Best from "../components/Home/Best";
import Feedback from "../components/Home/Feedback";
import Benefits from "../components/Home/Benefits";
import Episodes from "../components/Home/Episodes";
import Sponsor from "../components/Home/Sponsor";
import Posts from "../components/Home/Posts";
import PodcastApp from "../components/PodcastApp";

const Homepage = () => {
  const bestInfo = [
    {
      title:
        "One of the best daily podcasts that covers every topic on Spotify.",
      avatar: "best-avatar",
      name: "John Smith",
      job: "Social Community Manager",
    },
  ];
  return (
    <>
      <Presentation />
      <Podcasts />
      <Support />
      <Pleasure />
      <Best bestInfo={bestInfo} />
      <Feedback />
      <Benefits />
      <Episodes />
      <Sponsor />
      <Posts />
      <PodcastApp />
    </>
  );
};

export default Homepage;
