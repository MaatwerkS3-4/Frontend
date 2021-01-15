import React, {Component} from "react";
import "./register.styles.css";
import {TextBoxTag} from "../../components/input/text-box-tag/text-box-tag.component";
import {ButtonAttention} from "../../components/input/button/button-attention/button-attention.component";
import {handlePostUser} from "../../services/api.service";

class Register extends Component {
    state = {
        username: "",
        password: "",
        repeat: "",
        buttonDisabled: true
    };

    handleUsernameChange = (e) => {
        this.setState({username: e.target.value});
        this.handleButtonStateChange(e.target.value, this.state.password, this.state.repeat);
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
        this.handleButtonStateChange(this.state.username, e.target.value, this.state.repeat);
    };

    handleRepeatChange = (e) => {
        this.setState({repeat: e.target.value});
        this.handleButtonStateChange(this.state.username, this.state.password, e.target.value);
    };

    handleButtonStateChange = (userTxt, passwordTxt, repeatTxt) =>{
        if (userTxt !== "" && userTxt !== null && passwordTxt !== "" && passwordTxt !== null && repeatTxt !== "" && repeatTxt !== null) {
            if (passwordTxt === repeatTxt){
                this.state.buttonDisabled = false;
                return
            }   
        }
        this.state.buttonDisabled = true;
    };

    handleRegisterButtonClick = () => {
        console.log(this.state.password + " " + this.state.repeat);
        if (this.state.password === this.state.repeat) {
            const user = {
                username: this.state.username,
                password: this.state.password,
            };
            handlePostUser(user).then((response) => {
                localStorage.setItem("Session", response.jwt);
                localStorage.setItem("Username", response.username);
                localStorage.setItem("Id", response.id);
                window.location.href = "/";
            });
        }
    };

    render() {
        return (
            <div id="register-container">
                <div id="register-content">
                    <span className="text-title">Ik wil registreren...</span>
                    <div id="register-content-input">
                        <TextBoxTag
                            placeholder="GEBRUIKERSNAAM"
                            tag="GEBRUIKERSNAAM"
                            handleInputChange={this.handleUsernameChange}
                            type="text"
                        />
                        <TextBoxTag
                            placeholder="WACHTWOORD"
                            handleInputChange={this.handlePasswordChange}
                            type="password"
                            tag="WACHTWOORD"
                        />
                        <TextBoxTag
                            placeholder="HERHALEN"
                            handleInputChange={this.handleRepeatChange}
                            type="password"
                            tag="HERHALEN"
                        />
                    </div>
                    <div id="register-content-buttons">
                        <ButtonAttention
                            text="Meld Je Aan"
                            handleOnClick={this.handleRegisterButtonClick}
                            disabled={this.state.buttonDisabled}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
