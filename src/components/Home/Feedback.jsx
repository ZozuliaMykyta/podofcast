import React from "react";
import avatar1 from "../../img/home/feedback-1.svg";
import avatar2 from "../../img/home/feedback-2.svg";
import avatar3 from "../../img/home/feedback-3.svg";

const Feedback = () => {
  const sliderInfo = [
    {
      avatar: avatar1,
      icon: "small-spotify",
      name: "Luna lovegood",
      service: "Spotify",
    },
    {
      avatar: avatar2,
      icon: "small-google",
      name: "Emily Blunt",
      service: "Google Podcast",
    },
    {
      avatar: avatar3,
      icon: "small-apple",
      name: "Mia Winters",
      service: "Apple Podcast",
    },
    {
      avatar: avatar2,
      icon: "small-google",
      name: "Emily Blunt",
      service: "Google Podcast",
    },
    {
      avatar: avatar1,
      icon: "small-spotify",
      name: "Luna lovegood",
      service: "Spotify",
    },
  ];
  return (
    <section className="feedback rope">
      <div className="feedback__container container">
        <h2 className="feedback__title title">What our listeners say</h2>
        <h6 className="feedback__sub-title sub-title">
          Their experience throughout every platform
        </h6>
      </div>
      <div className="feedback__slider">
        <swiper-container
          space-between="20"
          slides-per-view="2.2"
          navigation="true"
          centered-slides="true"
          simulate-touch="false"
          navigation-next-el=".feedback-button-next"
          navigation-prev-el=".feedback-button-prev"
          breakpoints={JSON.stringify({
            320: {
              slidesPerView: 1.5,
            },

            1024: {
              slidesPerView: 2.2,
            },
          })}
        >
          {sliderInfo.map((info, index) => (
            <swiper-slide key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/img/quotes.svg`}
                alt="quotes"
              />
              <p className="feedback__text">
                Lorem ipsum dolor sit amet consectet piscing elit, sed do
                eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
              </p>
              <div className="feedback__person">
                <div className="feedback__avatar">
                  <img src={info.avatar} alt={info.name} />
                </div>
                <p className="feedback__info">
                  {info.name},{" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/${info.icon}.svg`}
                    alt={info.service}
                  />
                  <span>{info.service}</span>
                </p>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="feedback__btns-container">
        <div className="feedback-button-next">
          <svg
            width="9.477112"
            height="16.394165"
            viewBox="0 0 9.47711 16.3942"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Stroke 3"
              d="M8.22 1.25L1.25 8.19L8.22 15.13"
              stroke="#000000"
              strokeOpacity="1.000000"
              strokeWidth="2.500000"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="feedback-button-prev">
          <svg
            width="9.477112"
            height="16.394165"
            viewBox="0 0 9.47711 16.3942"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Stroke 3"
              d="M8.22 1.25L1.25 8.19L8.22 15.13"
              stroke="#000000"
              strokeOpacity="1.000000"
              strokeWidth="2.500000"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
