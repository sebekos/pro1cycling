import React from "react";
import LandingImg from "img/landing.jpg";

// eslint-disable-next-line
import styles from "./style.scss";

const Cover = () => {
  return (
    <div className="cover">
      <img className="coverImg" src={LandingImg} alt="AiBC" />
      <div className="centered">
        <div className="special">Euro Specialists</div>
        <div className="nextSpecial">Your one stop shop for all needs!</div>
        <div className="nextSpecial">
          <a href="tel:630-930-8572">(630) 930-8572</a>
        </div>
      </div>
    </div>
  );
};

export default Cover;
