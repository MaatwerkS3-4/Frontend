import React from "react";
import "./button-attention.styles.css"
import "../button.styles.css";

export const ButtonAttention = ({text, handleOnClick}) =>{
    return(
        <button className="button-attention text-button" onClick={() => handleOnClick()}>{text}</button>
    )
}