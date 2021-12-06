import React from "react";

// eslint-disable-next-line
import styles from "./styles.scss";

const GenericButton = ({ label, loading, disabled, onClick }) => {
  return (
    <button
      disabled={disabled || loading}
      className="generic-button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default GenericButton;
