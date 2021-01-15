import React from "react";
import "./text-area-tag.styles.css";
import { TextArea } from "../text-area/text-area.component";

export const TextAreaTag = ({ tag, placeholder, handleInputChange }) => {
  return (
    <div className="textarea-tag-container">
      <div className="textarea-tag text-button">{tag}</div>
      <TextArea
        handleInputChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};
