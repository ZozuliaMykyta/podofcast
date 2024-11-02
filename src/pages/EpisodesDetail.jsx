import React, { useContext, useEffect, useState } from "react";
import PodcastApp from "../components/PodcastApp";
import { Outlet, useParams } from "react-router-dom";
import { EpisodesContext } from "../components/Contexts/EpisodesContext";
import LatestEpisode from "../components/EpisodesDetail/LatestEpisode";

const EpisodesDetail = () => {
  const { data } = useContext(EpisodesContext);
  const [episode, setEpisode] = useState(false);
  const [card, setCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundCard = data.find((card) => card.id === parseInt(id)); // Находим карточку
    if (foundCard) {
      setCard(foundCard);
      setEpisode(true);
    }
  }, [data, id]);
  return (
    <>
      {episode && <Outlet context={{ card, id }} />}
      <LatestEpisode />
      <PodcastApp />
    </>
  );
};

export default EpisodesDetail;
