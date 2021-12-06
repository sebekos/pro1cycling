import React from "react";
import LandingImg from "img/landing.jpg";

const Cover = () => {
  return (
    <div className="cover">
      <img className="coverImg" src={LandingImg} alt="AiBC" />
      <div className="centered">
        <div className="special">PRO 1 CYCLING TEAM</div>
        {/* <div className="nextSpecial">
          <a href="tel:630-930-8572">(630) 930-8572</a>
        </div> */}
      </div>
    </div>
  );
};

export default Cover;
