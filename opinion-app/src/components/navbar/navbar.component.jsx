import React from "react";
import "./navbar.styles";

export const NavBar = ({handleCreateDiscussion}) => {
    return(
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
            <a className="navbar-brand" href="#">
                Opinions
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div id="navbarNav" className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link active">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link disabled">
                            Popular
                        </a>
                    </li>
                </ul>
            </div>
            <form className="form-inline my-2 my-lg-0">
                <button
                    type="button"
                    className="form-control mr-sm-2"
                    id="create-button"
                    onClick={handleCreateDiscussion}
                >
                    Create Post
                </button>
            </form>
        </nav>
    );
};