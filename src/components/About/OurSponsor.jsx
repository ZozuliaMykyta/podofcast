import React from "react";
import sponsorIcon1 from "../../img/about/icons/our-sponsor-1.svg";
import sponsorIcon2 from "../../img/about/icons/our-sponsor-2.svg";
import sponsorIcon3 from "../../img/about/icons/our-sponsor-3.svg";

const OurSponsor = () => {
  const sponsorSlider = [
    {
      icon: sponsorIcon1,
      alt: "Google podcast",
    },
    {
      icon: sponsorIcon2,
      alt: "Spotify",
    },
    {
      icon: sponsorIcon3,
      alt: "Youtube",
    },
  ];
  return (
    <section className="our-sponsor">
      <div className="our-sponsor__container container">
        <h2 className="our-sponsor__title title">Our Sponsor</h2>
        <h6 className="our-sponsor__sub-title sub-title">
          Our current official sponsor
        </h6>
      </div>
      <div className="our-sponsor__slider feedback__slider">
        <swiper-container
          space-between="20"
          slides-per-view="2.2"
          navigation="true"
          centered-slides="true"
          simulate-touch="false"
          navigation-next-el=".our-sponsor__button-next"
          navigation-prev-el=".our-sponsor__button-prev"
          breakpoints={JSON.stringify({
            320: {
              slidesPerView: 1.5,
            },

            1024: {
              slidesPerView: 2.2,
            },
          })}
        >
          {sponsorSlider.map((info, index) => (
            <swiper-slide key={index}>
              <div className="our-sponsor__img">
                <img src={info.icon} alt={info.alt} />
              </div>
              <p className="our-sponsor__text">
                Quis dictum cursus faucibus mattis dignissim. Pellentes que
                purus in sed sodales in mauris molestie. Eleifend estcon sctetur
                interdum eu in auctor. Gravida leo et.
              </p>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="feedback__btns-container">
        <div className="our-sponsor__button-next feedback-button-next">
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
        <div className="our-sponsor__button-prev feedback-button-prev">
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

export default OurSponsor;
