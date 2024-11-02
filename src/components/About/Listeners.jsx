import React from "react";
import listenersImg from "../../img/about/listeners.jpeg";

const Listeners = () => {
  return (
    <section className="listeners">
      <div className="listeners__container container">
        <h2 className="listeners__title title">What our listeners say</h2>
        <h6 className="listeners__sub-title sub-title">
          What our listeners say
        </h6>
        <img src={listenersImg} alt="studio" className="listeners__img" />
      </div>
    </section>
  );
};

export default Listeners;
