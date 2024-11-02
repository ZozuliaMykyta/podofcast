import React from "react";
import { useOutletContext } from "react-router-dom";
import episodeAvatar from "../../img/EpisodesDetail/episode-avatar.svg";
import { Link } from "react-router-dom";
import play from "../../img/EpisodesDetail/icon/episode-play.svg";
import star1 from "../../img/home/presentation-star-1.png";
import star2 from "../../img/home/presentation-star-2.png";
import star3 from "../../img/home/presentation-star-3.png";

const Episode = () => {
  const { card, id } = useOutletContext();

  return (
    <section className="episode">
      <div className="episode__container container">
        <div className="episode__block">
          <div className="episode__img">
            <img src={card.BigImg} alt={card.episode} />
          </div>
          <div className="episode__content">
            <h5 className="episode__desc episodes__desc">Episode {id}</h5>
            <h4 className="episode__item-title episodes__item-title">
              {card.title}
            </h4>
            <p className="episode__text episodes__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </p>
            <div className="episode__hosted">
              <div className="episode__person">
                <div className="episode__person-img">
                  <img src={episodeAvatar} alt="Jane Doe" />
                </div>
                <div className="episode__person-text">
                  <p>
                    Hosted by: <span>Jane Doe</span>
                  </p>
                </div>
              </div>
              <div className="episode__date">
                <span>Sep 22, 2021</span>
              </div>
            </div>
            <div className="episode__btns">
              <div className="episode__shadow-cont shadow-cont">
                <Link to="#!" className="episode__btn link-sha">
                  subscribe
                </Link>
                <div className="shadow"></div>
              </div>
              <div className="episode__shadow-cont-2 shadow-cont">
                <Link to="#!" className="episode__btn-2 link-sha">
                  <img src={play} alt="play" />
                  <p>
                    <span>listen now </span>({card.time} min)
                  </p>
                </Link>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="episode__tags">
          <div className="episode__tags-text">
            <span>Tags:</span>
          </div>
          {card.theme.map((theme, index) => (
            <div className="episode__theme theme" key={index}>
              <p>{theme}</p>
            </div>
          ))}
        </div>
        <div className="episode__stars-cont presentation__stars-cont">
          <div className="presentation__stars">
            <img
              className="episode__star1 presentation__star1 presentation__star"
              src={star1}
              alt="star"
            />
            <img
              className="episode__star2 presentation__star2 presentation__star"
              src={star2}
              alt="star"
            />
            <img
              className="episode__star3 presentation__star3 presentation__star"
              src={star3}
              alt="star"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episode;
