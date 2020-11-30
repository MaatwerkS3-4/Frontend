import React from "react";
import "./logo.styles.css"

export const Logo = ({}) =>{
    return(
        <div className="logo-container" onClick={() => window.location.href="/"}>
            <div className="title">Viewpoint</div>
            <div className="subtitle">
                Placeholder for a <span className="accent">slogan</span>
            </div>
        </div>
    )
}