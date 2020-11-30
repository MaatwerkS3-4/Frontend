import React from "react";
import "./header.styles.css";
import {NavBarMenu} from "../navigation-bar-menu/navigation-bar-menu.component";
import {Logo} from "../logo/logo.component";

export const Header = ({menuEnabled, handleToggleCreateDiscussion}) =>{
    return (
        <header>
            <Logo className="logo"/>
            {menuEnabled ? <NavBarMenu
                className="menu"
                handleToggleCreateDiscussion={handleToggleCreateDiscussion}/> : ""}
        </header>
    );
};
