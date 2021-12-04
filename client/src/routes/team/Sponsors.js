import React from "react";
import Sponsor1 from "img/sponsor1.jpg";

const sponsors = [
  {
    name: "Sponder1",
    logo: Sponsor1,
  },
  {
    name: "Sponder1",
    logo: Sponsor1,
  },
  {
    name: "Sponder1",
    logo: Sponsor1,
  },
  {
    name: "Sponder1",
    logo: Sponsor1,
  },
];

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsors">
        {sponsors.map((o) => (
          <div className="sponsor-img-container">
            <img className="sponsor-img" alt="sponsor" src={o.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
