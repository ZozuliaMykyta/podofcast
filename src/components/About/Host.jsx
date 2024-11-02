import React from "react";
import host1 from "../../img/about/host-1.svg";
import host2 from "../../img/about/host-2.svg";
import hostImg1 from "../../img/about/host-img-1.jpeg";
import hostImg2 from "../../img/about/host-img-2.jpeg";
import social1 from "../../img/about/icons/host-tiktok.svg";
import social2 from "../../img/about/icons/host-twitter.svg";
import social3 from "../../img/about/icons/host-instagram.svg";
import { Link } from "react-router-dom";

const Host = () => {
  const hostData = [
    {
      id: 1,
      img: hostImg1,
      bg: host1,
      title: "Porter Severus",
    },
    {
      id: 2,
      img: hostImg2,
      bg: host2,
      title: "Marques Keith",
    },
  ];
  const socialIcons = [
    { name: "TikTok", src: social1, alt: "TikTok" },
    { name: "Twitter", src: social2, alt: "Twitter" },
    { name: "Instagram", src: social3, alt: "Instagram" },
  ];
  return (
    <section className="host">
      <div className="host__container container">
        <h3 className="host__title">Founder and Main Host</h3>
        <div className="host__block">
          {hostData.map((data) => (
            <div className="host__item" key={data.id}>
              <div className="host__img">
                <img src={data.img} alt="person" />
              </div>
              <div className="host__content">
                <h6 className="host__desc">{`Host ${data.id}`}</h6>
                <h3 className="host__item-title">{data.title}</h3>
                <p className="host__text">
                  Lorem ipsum dolor sit amet con sectet piscing elit, sed do
                  eiusmod tempor rarylet podofcast.
                </p>
                <div className="host__follow">
                  <div className="host__follow-desc">
                    <span>follow me:</span>
                  </div>
                  <div className="host__social">
                    {socialIcons.map((icon) => (
                      <Link to="#!" key={icon.name}>
                        <img src={icon.src} alt={icon.alt} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <img className="host__bg" src={data.bg} alt="background" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Host;
