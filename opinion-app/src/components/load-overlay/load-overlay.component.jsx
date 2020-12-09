import React from "react";
import "./load-overlay.styles.css";

export const LoadOverlay = () =>{
    return(
        <div className="center">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
