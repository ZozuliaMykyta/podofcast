import React from "react";
import pleasure1 from "../../img/home/pleasure-1.jpeg";
import pleasure2 from "../../img/home/pleasure-2.jpeg";

const Pleasure = () => {
  const pleasureImg = [pleasure1, pleasure2];
  return (
    <section className="pleasure">
      <div className="pleasure__container container">
        <h2 className="pleasure__title">
          Talk. Listen. Get inspired by every minute of it.
        </h2>
        <div className="pleasure__block">
          {pleasureImg.map((img, index) => (
            <div className="pleasure__item" key={index}>
              <img src={img} alt="idea" className="pleasure__img" />
              <p className="pleasure__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pleasure;
