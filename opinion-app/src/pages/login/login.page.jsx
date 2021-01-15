import React, {Component} from "react";
import {handleLogin} from "../../services/api.service";
import {TextBoxTag} from "../../components/input/text-box-tag/text-box-tag.component";
import {ButtonAttention} from "../../components/input/button/button-attention/button-attention.component";
import {ButtonRegular} from "../../components/input/button/button-regular/button-regular.component";
import "./login.styles.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    buttonDisabled: true,
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
    this.handleButtonStateChange(e.target.value, this.state.password);
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
    this.handleButtonStateChange(this.state.username, e.target.value);
  };

  handleLoginButtonClick = () => {
    if (!this.state.buttonDisabled) {
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
      handleLogin(user).then((response) => {
        localStorage.setItem("Session", response.jwt);
        localStorage.setItem("Username", response.username);
        localStorage.setItem("Id", response.id);
        window.location.href = "/";
      });
    }
  };

  handleButtonStateChange = (userTxt, passwordTxt) => {
    if (
      userTxt !== "" &&
      userTxt != null &&
      passwordTxt !== "" &&
      passwordTxt != null
    ) {
      this.setState({buttonDisabled: false});
      return;
    }
    this.setState({buttonDisabled: true});
  };

  handleBackButtonClick = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <div id="login-container">
        <div id="login-content">
          <span className="text-title">Ik wil inloggen...</span>
          <div id="login-content-input">
            <TextBoxTag
              placeholder="GEBRUIKERSNAAM"
              tag="GEBRUIKERSNAAM"
              handleInputChange={this.handleUsernameChange}
              type="text"
              handleEnterPress={this.handleLoginButtonClick}
            ></TextBoxTag>
            <TextBoxTag
              tag="WACHTWOORD"
              placeholder="WACHTWOORD"
              handleInputChange={this.handlePasswordChange}
              type="password"
              handleEnterPress={this.handleLoginButtonClick}
            ></TextBoxTag>
          </div>
          <div id="login-content-buttons">
            <ButtonAttention
              text="Log In"
              handleOnClick={() => this.handleLoginButtonClick()}
              disabled={this.state.buttonDisabled}
            ></ButtonAttention>
            <ButtonRegular
              text="Annuleren"
              handleOnClick={this.handleBackButtonClick}
            ></ButtonRegular>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
