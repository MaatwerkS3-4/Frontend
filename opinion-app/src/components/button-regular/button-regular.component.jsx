import React from "react";
import "./button-regular.styles.css"

export const ButtonRegular = ({content, handleClick}) =>{
    return(
        <button onClick={() => handleClick()}> {content} </button>
    )
}