import React from "react";

const Best = ({ bestInfo }) => {
  const info = bestInfo[0];
  return (
    <section className="best">
      <div className="best__container container">
        <div className="best__block">
          <img src={`${process.env.PUBLIC_URL}/img/quotes.svg`} alt="quotes" />
          <h2 className="best__title">{info.title}</h2>
          <div className="best__person">
            <div className="best__avatar">
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/${info.avatar}.svg`}
                alt="John"
              />
            </div>
            <div className="best__info">
              <p>
                John Smith,{" "}
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/small-spotify.svg`}
                  alt="spotify"
                />{" "}
                <span>Social Community Manager</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
