import React from "react";

const Support = () => {
  const supportList = ["spotify", "google-podcast", "youtube"];

  return (
    <section className="support">
      <div className="support__container container">
        <div className="support__block">
          <div className="support__content">
            <h3 className="support__desc">Supported by:</h3>
          </div>
          <div className="support__list">
            {supportList.map((icon, index) => (
              <div className="support__item" key={index}>
                <img
                  className="support__img"
                  src={`${process.env.PUBLIC_URL}/img/icons/${icon}.svg`}
                  alt={icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
