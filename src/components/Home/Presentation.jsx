import React from "react";
import { Link } from "react-router-dom";
import star1 from "../../img/home/presentation-star-1.png";
import star2 from "../../img/home/presentation-star-2.png";
import star3 from "../../img/home/presentation-star-3.png";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation__container container">
        <h1 className="presentation__title">
          Your Daily
          <br />
          Podcast
        </h1>
        <p className="presentation__sub-title">
          We cover all kinds of categories and a weekly special guest.
        </p>
        <div className="presentation__shadow-cont shadow-cont">
          <Link to="#!" className="presentation__subscribe link-sha">
            subscribe
          </Link>
          <div className="shadow"></div>
        </div>
      </div>
      <div className="presentation__stars-cont">
        <div className="presentation__stars">
          <img
            className="presentation__star1 presentation__star"
            src={star1}
            alt="star"
          />
          <img
            className="presentation__star2 presentation__star"
            src={star2}
            alt="star"
          />
          <img
            className="presentation__star3 presentation__star"
            src={star3}
            alt="star"
          />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
