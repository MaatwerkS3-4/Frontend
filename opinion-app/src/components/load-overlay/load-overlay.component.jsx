import React from "react";
import "./load-overlay.styles.css";

export const LoadOverlay = () =>{
    return(
        <div className="loading-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
