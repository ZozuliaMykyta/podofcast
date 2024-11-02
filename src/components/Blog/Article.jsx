import React from "react";
import star1 from "../../img/home/presentation-star-1.png";
import star2 from "../../img/home/presentation-star-2.png";
import star3 from "../../img/home/presentation-star-3.png";

const Article = () => {
  return (
    <section className="article">
      <div className="article__container container">
        <h1 className="article__title">Article and News</h1>
        <h6 className="article__sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam–quis.
        </h6>
        <div className="article__search-cont">
          <div className="article__search">
            <img
              className="article__search-icon"
              src={`${process.env.PUBLIC_URL}/img/icons/search.svg`}
              alt="search"
            />
            <input placeholder="Search..." type="text" name="search" />
          </div>
        </div>
      </div>
      <div className="article__stars-cont presentation__stars-cont">
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

export default Article;
