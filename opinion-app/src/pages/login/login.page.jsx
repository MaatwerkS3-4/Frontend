import React, { Component } from "react";
import { handleLogin } from "../../services/api.service";
import { TextBox } from "../../components/input/text-box/text-box.component";
import { ButtonAttention } from "../../components/input/button/button-attention/button-attention.component";
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
    handleLogin(user).then((response) => {
      localStorage.setItem("Session", response.jwt);
      localStorage.setItem("Username", response.username);
      localStorage.setItem("Id", response.id);
      console.log(response.data);
    });
  };
  render() {
    return (
      <div id="login-container">
        <span className="text-title">Log In</span>
        <br></br>
        <TextBox
          placeholder="USERNAME"
          handleInputChange={this.handleUsernameChange}
          type="text"
        ></TextBox>
        <br></br>
        <TextBox
          placeholder="PASSWORD"
          handleInputChange={this.handlePasswordChange}
          type="password"
        ></TextBox>
        <br></br>
        <ButtonAttention
          text="Log In"
          handleClick={this.handleLoginButtonClick}
        ></ButtonAttention>
      </div>
    );
  }
}

export default Login;
