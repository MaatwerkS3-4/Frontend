import React from "react";
import "./navigation-bar-menu.styles.css";
import { ButtonAttention } from "../../input/button/button-attention/button-attention.component";
import { ButtonRegular } from "../../input/button/button-regular/button-regular.component";
import { Component } from "react";

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
  render() {
    return (
      <div id="menu">
        <ButtonRegular
          text="registreren"
          handleOnClick={this.handleRegisterClick}
        ></ButtonRegular>
        <ButtonAttention
          text="inloggen"
          handleOnClick={this.handleLoginClick}
        />
        <ButtonRegular
          text="discussie aanmaken"
          handleOnClick={() => this.props.handleToggleCreateDiscussion()}
        />
      </div>
    );
  }
}
export default NavBarMenu;
