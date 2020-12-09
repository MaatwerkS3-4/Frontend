import React from "react";
import "./button-regular.styles.css"
import "../button.styles.css";

export const ButtonRegular = ({text, handleOnClick}) =>{
    return(
        <button className="button-regular text-button" onClick={() => handleOnClick()}>{text}</button>
    )
}