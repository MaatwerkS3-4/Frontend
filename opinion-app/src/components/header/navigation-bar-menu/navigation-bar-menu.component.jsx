import React from "react";
import "./navigation-bar-menu.styles.css";
import {ButtonAttention} from "../../input/button/button-attention/button-attention.component";
import {ButtonRegular} from "../../input/button/button-regular/button-regular.component";


export const NavBarMenu = ({handleToggleCreateDiscussion}) =>{
    return(
        <div id="menu">
            <ButtonAttention text="inloggen" handleOnClick={() => console.log("login button clicked...")}/>
            <ButtonRegular text="discussie aanmaken" handleOnClick={() => handleToggleCreateDiscussion()}/>
        </div>
    )
}