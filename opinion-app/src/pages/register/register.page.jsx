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
    postUser(user).then((response) => {
      localStorage.setItem("Session", response.data.jwt);
      localStorage.setItem("Username", response.data.username);
      localStorage.setItem("Id", response.data.id);
      console.log(response.data);
    });
  };
  render() {
    return (
      <div id="register-container">
        <span className="title">Create a profile</span>
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
          content="Meld Je Aan"
          handleClick={this.handleRegisterButtonClick}
        ></ButtonAttention>
      </div>
    );
  }
}

export default Register;
