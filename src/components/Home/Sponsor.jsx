import React from "react";

const Sponsor = () => {
  const sponsorData = [
    {
      category: "Member",
      popular: false,
      price: "$9.99",
      include: [
        "Exclusive Content",
        "5% Discount on Merch",
        "Join the Community",
        "Livestreaming Access",
      ],
    },
    {
      category: "Family",
      popular: true,
      price: "$14.99",
      include: [
        "Everything in Tier 1",
        "Free tickets to Events",
        "Limited Edition Merch",
        "Promote your Product",
        "Request Topic",
      ],
    },
    {
      category: "Official",
      popular: false,
      price: "$29.99",
      include: [
        "Everything in Tier 2",
        "Exclusive Badge on Livestreaming",
        "Become an Official Sponsor",
        "Early Access to All Episodes",
        "Free Stikers and Merch",
      ],
    },
  ];
  return (
    <section className="sponsor rope" id="sponsor">
      <div className="sponsor__container container">
        <h2 className="sponsor__title title">Become our sponsor</h2>
        <h6 className="sponsor__sub-title sub-title">
          Get exclusive episodes, merch and more
        </h6>
        <div className="sponsor__content">
          {sponsorData.map((item, index) => (
            <div className="sponsor__block" key={index}>
              <div className="sponsor__item-top">
                <div className="sponsor__category-cont">
                  <div className="sponsor__category">
                    <h4>{item.category}</h4>
                  </div>
                  {item.popular && (
                    <div className="sponsor__popular">
                      <span>most popular</span>
                    </div>
                  )}
                </div>
                <p className="sponsor__text">
                  Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
                  tempor.
                </p>
                <div className="sponsor__purchase">
                  <div className="sponsor__shadow-cont shadow-cont">
                    <button className="sponsor__btn link-sha">subscribe</button>
                    <div className="shadow"></div>
                  </div>
                  <div className="sponsor__price">
                    <span>
                      {item.price}
                      <br />
                      /month
                    </span>
                  </div>
                </div>
              </div>
              <div className="sponsor__item-bottom">
                <h6 className="sponsor__desc">What’s included:</h6>
                <ul className="sponsor__list">
                  {item.include.map((include, index) => (
                    <li className="sponsor__list-item" key={index}>
                      {include}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
