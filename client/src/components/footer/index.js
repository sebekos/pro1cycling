import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line
import styles from "./style.scss";

const index = () => {
  return (
    <>
      <div className="footer-top"></div>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-title">PRO 1 REALTY CYCLYING Team</div>
          <div className="footer-info">
            <div>pro1realtyinc@gmail.com</div>
            <div>630-202-3494</div>
            <Link to="/login">Chicagoland Area</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
