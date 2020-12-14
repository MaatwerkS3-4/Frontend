import React, { Component } from "react";
import { login } from "../../services/api.service";
import { TextBox } from "../../components/text-box/text-box.component";
import { ButtonAttention } from "../../components/button-attention/button-attention.component";
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
    login(user).then((response) => {
      localStorage.setItem("Session", response.data.jwt);
      localStorage.setItem("Username", response.data.username);
      localStorage.setItem("Id", response.data.id);
      console.log(response.data);
    });
  };
  render() {
    return (
      <div id="login-container">
        <span className="title">Log In</span>
        <TextBox
          placeholder="USERNAME"
          handleInputChange={this.handleUsernameChange}
          type="text"
        ></TextBox>
        <TextBox
          placeholder="PASSWORD"
          handleInputChange={this.handlePasswordChange}
          type="password"
        ></TextBox>
        <br></br>
        <ButtonAttention
          content="Log In"
          handleClick={this.handleLoginButtonClick}
        ></ButtonAttention>
      </div>
    );
  }
}

export default Login;
