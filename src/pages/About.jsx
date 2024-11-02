import React from "react";
import AboutUs from "../components/About/AboutUs";
import Online from "../components/About/Online";
import Listeners from "../components/About/Listeners";
import History from "../components/About/History";
import Host from "../components/About/Host";
import OurSponsor from "../components/About/OurSponsor";
import GetInTouch from "../components/About/GetInTouch";
import PodcastApp from "../components/PodcastApp";

const About = () => {
  return (
    <>
      <AboutUs />
      <Online />
      <Listeners />
      <History />
      <Host />
      <OurSponsor />
      <GetInTouch />
      <PodcastApp />
    </>
  );
};

export default About;
