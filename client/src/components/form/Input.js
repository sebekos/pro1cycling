import React from "react";

// eslint-disable-next-line
import styles from "./styles.scss";

const Input = ({ type, value, name, onChange, placeholder, error }) => {
  return (
    <div className="form-input-container">
      <input
        className={`form-input ${error && `form-input-error`}`}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
