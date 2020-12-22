import React, { Component } from "react";
import { handleLogin } from "../../services/api.service";
import { TextBoxTag } from "../../components/input/text-box-tag/text-box-tag.component";
import { ButtonAttention } from "../../components/input/button/button-attention/button-attention.component";
import { ButtonRegular } from "../../components/input/button/button-regular/button-regular.component";
import "./login.styles.css";
class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleLoginButtonClick = () => {
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    handleLogin(user)
      .then((response) => {
        localStorage.setItem("Session", response.jwt);
        localStorage.setItem("Username", response.username);
        localStorage.setItem("Id", response.id);
        console.log(response.data);
      })
      .finally(() => {
        window.location.href = "/";
      });
  };
  handleBackButtonClick = () => {
    window.location.href = "/";
  };
  render() {
    return (
      <div id="login-container">
        <span className="text-title">Ik wil inloggen...</span>
        <TextBoxTag
          placeholder="GEBRUIKERSNAAM"
          tag="GEBRUIKERSNAAM"
          handleInputChange={this.handleUsernameChange}
          type="text"
        ></TextBoxTag>
        <TextBoxTag
          tag="WACHTWOORD"
          placeholder="WACHTWOORD"
          handleInputChange={this.handlePasswordChange}
          type="password"
        ></TextBoxTag>
        <ButtonAttention
          text="Log In"
          handleOnClick={() => this.handleLoginButtonClick()}
        ></ButtonAttention>
        <ButtonRegular
          text="Annuleren"
          handleOnClick={this.handleBackButtonClick}
        ></ButtonRegular>
      </div>
    );
  }
}

export default Login;
