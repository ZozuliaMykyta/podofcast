import React from "react";
import star1 from "../../img/home/presentation-star-1.png";
import star2 from "../../img/home/presentation-star-2.png";
import star3 from "../../img/home/presentation-star-3.png";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const AboutUs = () => {
  return (
    <section className="aboutUs bg">
      <div className="aboutUs__container container">
        <h1 className="aboutUs__title">About Pod of Cast</h1>
        <h6 className="aboutUs__sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam–quis.
        </h6>
        <div className="aboutUs__btns">
          <div className="aboutUs__shadow-cont-1 shadow-cont">
            <HashLink smooth to="/#sponsor" className="aboutUs__btn-1 link-sha">
              become sponsor
            </HashLink>
            <div className="shadow"></div>
          </div>
          <div className="aboutUs__shadow-cont-2 shadow-cont">
            <HashLink smooth to="/#sponsor" className="aboutUs__btn-2 link-sha">
              subscribe
            </HashLink>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
      <div className="bg__stars-cont presentation__stars-cont">
        <div className="bg__stars presentation__stars">
          <img
            className="bg__star1 presentation__star"
            src={star1}
            alt="star"
          />
          <img
            className="bg__star2 presentation__star"
            src={star2}
            alt="star"
          />
          <img
            className="bg__star3 presentation__star"
            src={star3}
            alt="star"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
