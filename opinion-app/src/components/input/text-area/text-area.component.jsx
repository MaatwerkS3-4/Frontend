import React from "react";
import "./text-area.styles.css";

export const TextArea = ({ placeholder, handleInputChange }) => {
  return (
    <div className="textarea-container">
      <textarea
        className="text-body"
        onChange={handleInputChange}
        placeholder={placeholder}
        rows={1}
      />
    </div>
  );
};
