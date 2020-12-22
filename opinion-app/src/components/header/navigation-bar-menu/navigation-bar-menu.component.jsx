import React from "react";
import "./navigation-bar-menu.styles.css";
import { ButtonAttention } from "../../input/button/button-attention/button-attention.component";
import { ButtonRegular } from "../../input/button/button-regular/button-regular.component";
import { Component } from "react";
import { isLoggedIn } from "../../../services/authentication.service";

class NavBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLoginClick = () => {
    window.location.href = "login";
  };
  handleRegisterClick = () => {
    window.location.href = "register";
  };
  logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  render() {
    return (
      <div id="menu">
        {!isLoggedIn() && (
          <ButtonRegular
            text="registreren"
            handleOnClick={this.handleRegisterClick}
          ></ButtonRegular>
        )}
        {!isLoggedIn() && (
          <ButtonAttention
            text="inloggen"
            handleOnClick={this.handleLoginClick}
          />
        )}
        {isLoggedIn() && (
          <ButtonAttention text="log uit" handleOnClick={this.logOut} />
        )}
        {isLoggedIn() && (
          <ButtonRegular
            text="discussie aanmaken"
            handleOnClick={() => this.props.handleToggleCreateDiscussion()}
          />
        )}
      </div>
    );
  }
}
export default NavBarMenu;
