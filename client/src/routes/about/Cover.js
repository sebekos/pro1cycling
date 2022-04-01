import React from "react";
import LandingImg from "img/landing.jpg";
import LogoImg from "img/fulllogo.png";

const Cover = () => {
  return (
    <div className="cover">
      <img className="coverImg" src={LandingImg} alt="AiBC" />
      <div className="centered">
        <img className="fulllogo-cover-mp" src={LogoImg} alt="Pro1Realty" />
        <div style={{ marginTop: 10 }} className="nextSpecial">
          CYCLYING TEAM
        </div>
        {/* <div className="nextSpecial">
          <a href="tel:630-930-8572">(630) 930-8572</a>
        </div> */}
      </div>
    </div>
  );
};

export default Cover;
