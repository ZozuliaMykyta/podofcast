import React from "react";
import { ReactComponent as socialIcon1 } from "../../img/icons/footer-twitter.svg";
import { ReactComponent as socialIcon2 } from "../../img/icons/footer-instagram.svg";
import { ReactComponent as socialIcon3 } from "../../img/icons/footer-tiktok.svg";
import star1 from "../../img/home/presentation-star-1.png";
import star2 from "../../img/home/presentation-star-2.png";
import star3 from "../../img/home/presentation-star-3.png";
import { Link } from "react-router-dom";

const PostAbout = ({ post }) => {
  const socialIcon = [
    { id: 1, Component: socialIcon1 },
    { id: 2, Component: socialIcon2 },
    { id: 3, Component: socialIcon3 },
  ];
  return (
    <section className="post-about">
      <div className="post-about__container container">
        <div className="post-about__bar">
          <Link to="/Blog" className="post-about__back">
            <span>Back to articles</span>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/post-about/arrow.svg`}
              alt="arrow"
            />
          </Link>
          <div className="post-about__date">
            <span>Sep 12, 2021</span>
          </div>
        </div>
        <h5 className="post-about__desc">{post.desc}</h5>
        <h1 className="post-about__title">{post.title}</h1>
        <div className="post-about__themes">
          {post.categories.map((categoriesItem, index) => (
            <div className="post-about__theme theme" key={index}>
              <p>{categoriesItem}</p>
            </div>
          ))}
        </div>
        <div className="post-about__block">
          {socialIcon.map(({ id, Component }) => (
            <div className="post-about-social footer__social" key={id}>
              <Link to="#!">
                <Component className="footer__social-icon" />
              </Link>
            </div>
          ))}
        </div>
        <div className="post-about__img">
          <img src={post.img} alt={post.desc} />
        </div>
      </div>
      <div className="post-about__stars-cont presentation__stars-cont">
        <div className="presentation__stars">
          <img
            className="post-about__star1 presentation__star1 presentation__star"
            src={star1}
            alt="star"
          />
          <img
            className="post-about__star2 presentation__star2 presentation__star"
            src={star2}
            alt="star"
          />
          <img
            className="post-about__star3 presentation__star3 presentation__star"
            src={star3}
            alt="star"
          />
        </div>
      </div>
    </section>
  );
};

export default PostAbout;
