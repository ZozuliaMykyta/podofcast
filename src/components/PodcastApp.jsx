import React from "react";

const PodcastApp = () => {
  const socialImg = [
    {
      img: "podcastApp-google",
      app: "google",
    },
    {
      img: "podcastApp-spotify",
      app: "spotify",
    },
    {
      img: "podcastApp-youtube",
      app: "youtube",
    },
  ];
  return (
    <section className="podcast-app">
      <div className="podcast-app__content">
        <div className="podcast-app__container container">
          <h6 className="podcast-app__beta">beta</h6>
          <h2 className="podcast-app__title title">
            Available now Pod of Cast App
          </h2>
          <h6 className="podcast-app__sub-title sub-title">
            We just launched our podcast app!
          </h6>
          <div className="podcast-app__shadow-cont shadow-cont">
            <button className="podcast-app__btn link-sha">download now</button>
            <div className="shadow"></div>
          </div>
          <h6 className="podcast-app__desc">Content also available on:</h6>
          <div className="podcast-app__social">
            {socialImg.map((img, index) => (
              <div className="podcast-app__img" key={index}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/${img.img}.svg`}
                  alt={img.app}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastApp;
