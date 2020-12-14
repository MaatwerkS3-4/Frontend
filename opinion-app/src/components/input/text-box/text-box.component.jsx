import React from "react";
import "./text-box.styles.css";

export const TextBox = ({ placeholder, handleInputChange }) => {
  return (
    <input
      type="search"
      className="textbox-field text-body"
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};
