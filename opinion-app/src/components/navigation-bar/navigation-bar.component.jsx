import React, { Component } from "react";
import { ButtonAttention } from "../button-attention/button-attention.component";
class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
  }
  handleLoginClick = () => {
    this.props.history.push("/login");
  };

  handleRegisterClick = () => {
    this.props.history.push("/register");
  };

  handleToggleCreateDiscussion = () => {
    this.props.handleToggleCreateDiscussion();
  };

  render() {
    return (
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
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href={"/"} className="nav-link active">
                Home
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <button
            type="button"
            className="form-control mr-sm-2"
            id="create-button"
            onClick={this.handleToggleCreateDiscussion}
          >
            Create Post
          </button>
          <ButtonAttention
            handleClick={this.handleRegisterClick}
            content="Aanmelden"
          ></ButtonAttention>
          <button
            type="button"
            className="form-control mr-sm-2"
            id="create-button"
            onClick={this.handleLoginClick}
          >
            Log In
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
