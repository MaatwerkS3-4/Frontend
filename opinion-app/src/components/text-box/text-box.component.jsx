import React from "react";
import "./text-box.styles.css";

export const TextBox = ({ tag, placeholder, handleInputChange, type }) => {
  return (
    <div>
      <p>{tag}</p>
      <input
        type={type}
        className="search"
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};
