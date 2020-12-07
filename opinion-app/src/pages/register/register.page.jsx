import React, { Component } from "react";
import "./register.module.css";
import { TextBox } from "../../components/text-box/text-box.component";
import { ButtonAttention } from "../../components/button-attention/button-attention.component";
import { postUser } from "../../services/api.service";

class Register extends Component {
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
  handleRegisterButtonClick = () => {
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    postUser(user).then((token) => {
      localStorage.setItem("session", token);
    });
  };
  render() {
    return (
      <div id="register-container">
        <span className="title">Create a profile</span>
        <TextBox
          placeholder="USERNAME"
          handleInputChange={this.handleUsernameChange}
        ></TextBox>
        <TextBox
          placeholder="PASSWORD"
          handleInputChange={this.handlePasswordChange}
        ></TextBox>
        <br></br>
        <ButtonAttention
          content="Meld Je Aan"
          handleClick={this.handleRegisterButtonClick}
        ></ButtonAttention>
      </div>
    );
  }
}

export default Register;
