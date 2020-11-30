import React from "react";
import "./navigation-bar-menu.styles.css";
import {ButtonAttention} from "../button/button-attention/button-attention.component";
import {ButtonRegular} from "../button/button-regular/button-regular.component";


export const NavBarMenu = ({handleToggleCreateDiscussion}) =>{
    return(
        <div className="menu-container">
            <ButtonAttention text="Create discussion" handleOnClick={() => handleToggleCreateDiscussion()}/>
            <ButtonRegular text="test regular" handleOnClick={() => console.log("button press")}/>
            <ButtonRegular text="test regular" handleOnClick={() => console.log("button press")}/>
            <ButtonRegular text="test regular" handleOnClick={() => console.log("button press")}/>
        </div>
    )
}