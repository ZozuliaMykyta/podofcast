import React from "react";
import podcast1 from "../../img/home/podcasts-1.jpeg";
import podcast2 from "../../img/home/podcasts-2.jpeg";
import podcast3 from "../../img/home/podcasts-3.jpeg";
import podcast4 from "../../img/home/podcasts-4.jpeg";
import podcast5 from "../../img/home/podcasts-5.jpeg";

const podcasts = [
  { img: podcast1, alt: "Tesla Autopilot" },
  { img: podcast2, alt: "Self-confidence" },
  { img: podcast3, alt: "Perplexed Mind" },
  { img: podcast4, alt: "Women's Rights" },
  { img: podcast5, alt: "Social Class" },
];

const Podcasts = () => {
  return (
    <section className="podcast">
      <div className="podcast__container">
        <swiper-container
          slides-per-view="3.5"
          space-between="20"
          grab-cursor="true"
          breakpoints={JSON.stringify({
            320: {
              slidesPerView: 1.5,
            },

            600: {
              slidesPerView: 2.5,
            },

            1024: {
              slidesPerView: 3.5,
            },
          })}
        >
          {podcasts.map((podcast, index) => (
            <swiper-slide key={index} style={{ width: "373px" }}>
              <img src={podcast.img} alt={podcast.alt} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default Podcasts;
