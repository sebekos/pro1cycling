import React from "react";

// eslint-disable-next-line
import styles from "./styles.scss";

const Loader = ({ float }) => {
  return (
    <div className={`loader-container ${float && "loader-float"}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
