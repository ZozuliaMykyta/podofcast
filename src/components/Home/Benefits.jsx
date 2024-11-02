import React from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Benefits = () => {
  const benefitsData = [
    {
      img: "benefits-",
      title: "Topic by Request",
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
    },
    {
      img: "benefits-",
      title: "Exclusive Content",
      text: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
    },
    {
      img: "benefits-",
      title: "Join the Community",
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
    },
    {
      img: "benefits-",
      title: "Livestreaming Access",
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
    },
    {
      img: "benefits-",
      title: "Exclusive Episodes & Merch",
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
    },

    {
      img: "benefits-",
      title: "And much more!",
      text: "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
    },
  ];
  return (
    <section className="benefits rope">
      <div className="benefits__container">
        <h2 className="benefits__title title">Membership benefits</h2>
        <h6 className="benefits__sub-title sub-title">
          Become our sponsor and get all benefits
        </h6>
        <div className="benefits__block">
          {benefitsData.map((item, index) => (
            <div className="benefits__item" key={index}>
              <img
                className="benefits__img"
                src={`${process.env.PUBLIC_URL}/img/icons/${item.img}${
                  index + 1
                }.svg`}
                alt="icon"
              />
              <h5 className="benefits__about">{item.title}</h5>
              <p className="benefits__text">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="benefits__shadow-cont shadow-cont">
          <HashLink smooth to="/#sponsor" className="benefits__btn link-sha">
            see pricing
          </HashLink>
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
