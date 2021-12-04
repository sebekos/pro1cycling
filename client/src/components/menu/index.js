import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line
import styles from "./style.scss";

const routes = [
  { route: false, image: false, text: "PRO1" },
  { route: "/", image: false, text: "ABOUT" },
  { route: "/team", image: false, text: "TEAM" },
  { route: "/schedule", image: false, text: "SCHEDULE" },
  { route: "/newsmedia", image: false, text: "NEWS/MEDIA" },
  { route: "/partners", image: false, text: "PARTNERS" },
  { route: "/contact", image: false, text: "CONTACT" },
];

const index = () => {
  return (
    <div className="container">
      <div className="item-container">
        {routes.map((o) => (
          <div className="item">
            <Link to={`${o.route}`}>{o.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
