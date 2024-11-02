import React, { useContext } from "react";
import { EpisodesContext } from "../Contexts/EpisodesContext";
import { Link } from "react-router-dom";
import EpisodesCard from "./EpisodesCard";

const Episodes = () => {
  const { data } = useContext(EpisodesContext);
  return (
    <section className="episodes rope">
      <div className="episodes__container container">
        <h2 className="episodes__title title">Recent Episodes</h2>
        <h6 className="episodes__sub-title sub-title">
          Available on your favorite platform
        </h6>
        <div className="episodes__block">
          {data.map((card, index) => (
            <EpisodesCard card={card} key={index} />
          ))}
        </div>
        <div className="episodes__shadow-cont shadow-cont">
          <Link to="episodes" className="episodes__btn link-sha">
            browse all episodes
          </Link>
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
