import React from "react";
import "./logo.styles.css"

export const Logo = () =>{
    return(
        <div id="logo-container" onClick={() => window.location.href="/"}>
            <div id="logo-title" className="text-headline">Viewpoint</div>
            <div id="logo-slogan" className="text-title">
                Placeholder for a <span className="text-attention">slogan</span>
            </div>
        </div>
    )
}