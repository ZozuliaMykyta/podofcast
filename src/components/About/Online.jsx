import React from "react";

const Online = () => {
  const onlineItem = [
    {
      id: 1,
      count: "76",
      who: "Community Members",
    },
    {
      id: 2,
      count: "128",
      who: "Podcast Subscribers",
    },
    {
      id: 3,
      count: "59",
      who: "Daily Listeners",
    },
  ];
  return (
    <section className="online">
      <div className="online__container container">
        <div className="online__block">
          {onlineItem.map((item) => (
            <div className="online__item" key={item.id}>
              <h3 className="online__count title">{`${item.count}k`}</h3>
              <h6 className="online__desc">{item.who}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Online;
