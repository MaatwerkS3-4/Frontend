import React from "react";
import "./header.styles.css";
import {NavBarMenu} from "../navigation-bar-menu/navigation-bar-menu.component";
import {Logo} from "../logo/logo.component";

export const Header = ({handleToggleCreateDiscussion, menuEnabled}) => {
    return(
        <header>
            <Logo className="logo"/>
            {menuEnabled ? <NavBarMenu
                className="menu"
                handleToggleCreateDiscussion={handleToggleCreateDiscussion}/> : ""}
        </header>
        // <nav className="navbar navbar-light bg-light navbar-expand-lg">
        //     <a className="navbar-brand" href="#">
        //         Opinions
        //     </a>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-toggle="collapse"
        //         data-target="#navbarNavAltMarkup"
        //         aria-controls="navbarNavAltMarkup"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //     >
        //         <span className="navbar-toggler-icon"/>
        //     </button>
        //     <div id="navbarNav" className="collapse navbar-collapse">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <a href={"/"} className="nav-link active">
        //                     Home
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        //     <form className="form-inline my-2 my-lg-0">
        //         <button
        //             type="button"
        //             className="form-control mr-sm-2"
        //             id="create-button"
        //             onClick={handleToggleCreateDiscussion}
        //         >
        //             Create Post
        //         </button>
        //     </form>
        // </nav>
    );
};