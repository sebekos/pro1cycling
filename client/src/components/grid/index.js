import React from "react";

// eslint-disable-next-line
import styles from "./styles.scss";

const index = ({ data }) => {
  return (
    <div className="grid-container">
      <div className="grid">
        {data.map((o) => (
          <div className="griditem">
            <div className="griditem-img-container">
              <img
                className="griditem-img"
                alt="griditem"
                src={o.avatar_link}
              />
            </div>
            <div className="griditem-info">
              <div className="griditem-info1">
                {o.firstName} {o.lastName}
              </div>
              <div className="griditem-info2">{o.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
