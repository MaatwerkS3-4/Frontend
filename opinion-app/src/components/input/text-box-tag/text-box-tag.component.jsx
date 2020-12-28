import React from "react";
import "./text-box-tag.styles.css";
import { TextBox } from "../text-box/text-box.component";

export const TextBoxTag = ({ tag, placeholder, handleInputChange, type }) => {
  return (
    <div className="textbox-container">
      <div className="textbox-tag text-button">{tag}</div>
      <TextBox
        handleInputChange={handleInputChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
