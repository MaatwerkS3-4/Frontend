import React from "react";
import styles from "./button-attention.module.css";

export const ButtonAttention = ({content, handleClick}) =>{
    return(
        <button className={styles.button} onClick={() => handleClick()}> {content} </button>
    )
}