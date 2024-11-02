import React from "react";
import { Link } from "react-router-dom";

const EpisodesCard = ({ card, index }) => {
  return (
    <Link to={`/episodes/${card.id}`}>
      <div className="episodes__item">
        <div className="episodes__top">
          <div className="episodes__img">
            <img src={card.img} alt={`episode-${Math.abs(index - 6)}`} />
          </div>
          <div className="episodes__content">
            <h5 className="episodes__desc">{card.episode}</h5>
            <h4 className="episodes__item-title">{card.title}</h4>
            <p className="episodes__text">{card.text}</p>
          </div>
        </div>
        <div className="episodes__bottom">
          <div className="episodes__themes themes">
            {card.theme.map((theme, index) => (
              <div className="episodes__theme theme" key={index}>
                <p>{theme}</p>
              </div>
            ))}
          </div>
          <div className="episodes__hosted">
            <div className="episodes__who">
              <p>Hosted by: </p>
            </div>
            <div className="episodes__people">
              <img src={card.hosted} alt="hosted by" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EpisodesCard;
