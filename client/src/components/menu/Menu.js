import React from "react";
import { uuid } from "utils";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

// eslint-disable-next-line
import styles from "./style.scss";

const routes = [
  // { route: false, image: false, text: "PRO1" },
  { route: "/", image: false, text: "ABOUT" },
  { route: "/team", image: false, text: "TEAM" },
  { route: "/schedule", image: false, text: "SCHEDULE" },
  { route: "/newsmedia", image: false, text: "NEWS/MEDIA" },
  { route: "/partners", image: false, text: "PARTNERS" },
  { route: "/contact", image: false, text: "CONTACT" },
];

const adminRoutes = [
  { route: "/editteam", image: false, text: "TEAM" },
  { route: "/schedule", image: false, text: "SCHEDULE" },
  { route: "/editnews", image: false, text: "NEWS/MEDIA" },
  { route: "/editnews", image: false, text: "LOGOUT" },
];

const Menu = ({ isAuth }) => {
  const { pathname } = useLocation();
  const renderRoutes = isAuth ? adminRoutes : routes;
  return (
    <div className="container">
      <div className="item-container">
        {renderRoutes.map((o) => (
          <div
            key={uuid()}
            className={`item ${pathname === o.route ? "active-link" : ""}`}
          >
            <Link to={`${o.route}`} onClick={() => window.scrollTo(0, 0)}>
              {o.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, null)(Menu);
