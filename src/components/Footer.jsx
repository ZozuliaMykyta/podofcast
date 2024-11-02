import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as socialIcon1 } from "../img/icons/footer-twitter.svg";
import { ReactComponent as socialIcon2 } from "../img/icons/footer-instagram.svg";
import { ReactComponent as socialIcon3 } from "../img/icons/footer-tiktok.svg";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const socialIcon = [
    { id: 1, Component: socialIcon1 },
    { id: 2, Component: socialIcon2 },
    { id: 3, Component: socialIcon3 },
  ];
  const footerPlatform = [
    {
      img: "footer-google",
      name: "google podcast",
    },
    {
      img: "footer-spotify",
      name: "spotify",
    },
    {
      img: "footer-youtube",
      name: "youtube",
    },
  ];
  const footerApp = [
    {
      img: "footer-appstore",
      name: "appstore",
    },
    {
      img: "footer-googleplay",
      name: "googleplay",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__about">
            <div className="footer__create">
              <div className="footer__logo">
                <Link to="/">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/logo.svg`}
                    alt="Pod Of Cast"
                  />
                </Link>
              </div>
              <div className="footer__date">
                <span>©2021.</span>
              </div>
            </div>
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="footer__social-block">
              {socialIcon.map(({ id, Component }) => (
                <div className="footer__social" key={id}>
                  <Link to="#!">
                    <Component className="footer__social-icon" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="footer__route">
            <nav className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item">
                  <Link to="about">About</Link>
                </li>
                <li className="footer__item">
                  <Link to="#!">Testimonials</Link>
                </li>
                <li className="footer__item">
                  <Link to="#!">Features</Link>
                </li>
                <li className="footer__item">
                  <Link to="/episodes">Episodes</Link>
                </li>
                <li className="footer__item">
                  <HashLink smooth to="/#sponsor">
                    Pricing
                  </HashLink>
                </li>
                <li className="footer__item">
                  <Link to="blog">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__apps">
            <h6 className="footer__listen">
              Listen to episodes on your fav platform:
            </h6>
            <div className="footer__platforms">
              {footerPlatform.map((plat, index) => (
                <div className="footer__platform" key={index}>
                  <Link to="#!">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/icons/${plat.img}.svg`}
                      alt={plat.name}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="footer__app">
              <h6 className="footer__app-desc">App available on:</h6>
              <div className="footer__app-block">
                {footerApp.map((app, index) => (
                  <div className="footer__app-item" key={index}>
                    <Link to="#!">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/icons/${app.img}.svg`}
                        alt={app.name}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            <span>©2022. All Rights Reserved. Pod of Cast</span>
          </div>
          <div className="footer__terms">
            <span>Terms • Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
