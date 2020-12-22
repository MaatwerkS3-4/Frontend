import React from "react";
import "./text-box.styles.css";

export const TextBox = ({ placeholder, handleInputChange, type }) => {
  return (
    <input
      type={type}
      className="textbox-field text-body"
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};
