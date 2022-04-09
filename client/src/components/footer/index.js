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
          <div className="footer-title">Pro 1 Realty Cycling Team</div>
          <div className="footer-info">
            <div>6900 Main St. Downers Grove, IL, Suite 153</div>
            <div>pro1rct@gmail.com</div>
            <div>(630) 202-3494</div>
            <div>Chicagoland Area</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
