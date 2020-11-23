import React from "react";
import "./button-attention.styles.css";

export const ButtonAttention = ({content, handleClick}) =>{
    return(
        <button onClick={() => handleClick()}> {content} </button>
    )
}