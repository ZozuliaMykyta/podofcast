import React, { useContext, useEffect, useState } from "react";
import { EpisodesContext } from "../Contexts/EpisodesContext";
import EpisodesCard from "../Home/EpisodesCard";

const LatestEpisode = () => {
  const { data } = useContext(EpisodesContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredEpisodes, setFilteredEpisodes] = useState(data);
  const categories = [
    "All",
    "Business",
    "Comedy",
    "Education",
    "Health",
    "News",
    "Tech",
  ];
  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? data
        : data.filter((episode) =>
            episode.theme.includes(selectedCategory.toLowerCase())
          );
    setFilteredEpisodes(filtered);
  }, [data, selectedCategory]);

  return (
    <section className="latest-episode">
      <div className="latest-episode__container container">
        <h2 className="latest-episode__title title">Latest Episode</h2>
        <div className="latest-episode__category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "latest-episode__active-btn"
                  : ""
              } latest-episode__btn`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="latest-episode__block">
          {filteredEpisodes.map((card, index) => (
            <EpisodesCard card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestEpisode;
