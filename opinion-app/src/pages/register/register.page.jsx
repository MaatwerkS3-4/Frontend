import React, { Component } from "react";
import "./register.styles.css";
import { TextBox } from "../../components/input/text-box/text-box.component";
import { ButtonAttention } from "../../components/input/button/button-attention/button-attention.component";
import { handlePostUser } from "../../services/api.service";

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
    handlePostUser(user).then((response) => {
      localStorage.setItem("Session", response.jwt);
      localStorage.setItem("Username", response.username);
      localStorage.setItem("Id", response.id);
      console.log(response.data);
    });
  };
  render() {
    return (
      <div id="register-container">
        <span className="text-title">Create a profile</span>
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
          text="Meld Je Aan"
          handleClick={this.handleRegisterButtonClick}
        ></ButtonAttention>
      </div>
    );
  }
}

export default Register;
