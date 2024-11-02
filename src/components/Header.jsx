import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const handleBurger = () => {
    setOpenBurger(!openBurger);
  };

  if (openBurger && window.innerWidth < 1024) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const BurgerHandleClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", BurgerHandleClick);

    return () => {
      document.removeEventListener("mousedown", BurgerHandleClick);
    };
  }, []);
  useEffect(() => {
    const NavHandleClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setOpenBurger(false);
      }
    };

    document.addEventListener("mousedown", NavHandleClick);

    return () => {
      document.removeEventListener("mousedown", NavHandleClick);
    };
  }, []);
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/logo.svg`}
              alt="Pod Of Cast"
            />
          </Link>
        </div>
        <div
          ref={navRef}
          className={`header__menu-container ${
            openBurger ? "burger-is-open" : ""
          }`}
        >
          <div className="header__menu">
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <Link to="/episodes">Episodes</Link>
                </li>
                <li className="header__item">
                  <Link to="about">About</Link>
                </li>
                <li className="header__item header__sub-nav">
                  <button ref={buttonRef} onClick={toggleMenu}>
                    More
                  </button>
                  <div className="header__arrow">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/icons/header-arrow.svg`}
                      alt="arrow"
                      className={`${isOpen ? "rotate" : ""}`}
                    />
                  </div>
                  <div
                    className={`header__sub-block ${
                      isOpen ? "menu_active" : ""
                    }`}
                    ref={menuRef}
                  >
                    <ul className="header__sub-list">
                      <li className="header__sub-item">
                        <Link to="blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="header__info"
            style={{
              marginTop: isOpen && window.innerWidth < 1024 ? "20px" : "0px",
              transition: "margin-top 0.3s ease",
            }}
          >
            <Link to="episodes" className="header__episodes">
              recent episodes
            </Link>
            <div className="header__shadow-cont shadow-cont">
              <HashLink
                smooth
                to="/#sponsor"
                className="header__subscribe link-sha"
              >
                subscribe
              </HashLink>
              <div className="header__shadow shadow"></div>
            </div>
          </div>
        </div>
        <button
          onClick={handleBurger}
          ref={burgerRef}
          className="header__burger burger"
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
