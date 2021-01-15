import React from "react";
import "./button-attention.styles.css";
import "../button.styles.css";

export const ButtonAttention = ({ text, handleOnClick, disabled=false }) => {
  return (
    <button className="button-attention text-button" onClick={handleOnClick} disabled={disabled}>
      {text}
    </button>
  );
};
