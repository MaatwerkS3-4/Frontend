import React, {Component} from "react";
import "./navigation-bar-menu.styles.css";
import {ButtonAttention} from "../../input/button/button-attention/button-attention.component";
import {ButtonRegular} from "../../input/button/button-regular/button-regular.component";
import {isLoggedIn} from "../../../services/authentication.service";
import {injectIntl} from "react-intl";

class NavBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLoginClick = () => {
    window.location.href = "/login";
  };
  handleRegisterClick = () => {
    window.location.href = "/register";
  };
  logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  handleProfileClick = () => {
    window.location.href = "/profile";
  };
  render() {
    const { intl } = this.props;
    return (
      <div id="menu">
        {!isLoggedIn() && (
          <ButtonAttention
            text={intl.formatMessage({ id: "navbar.login" })}
            handleOnClick={this.handleLoginClick}
          />
        )}
        {!isLoggedIn() && (
            <ButtonRegular
                text={intl.formatMessage({ id: "navbar.register" })}
                handleOnClick={this.handleRegisterClick}
            />
        )}
        {isLoggedIn() && (
          <ButtonAttention
            text={intl.formatMessage({ id: "navbar.logout" })}
            handleOnClick={this.logOut}
          />
        )}
        {isLoggedIn() && (
          <ButtonRegular
            text={intl.formatMessage({ id: "navbar.discussion.create" })}
            handleOnClick={() => this.props.handleToggleCreateDiscussion()}
          />
        )}
        {isLoggedIn() && (
            <ButtonRegular
                text={intl.formatMessage({ id: "navbar.profile" })}
                handleOnClick={this.handleProfileClick}
            />
        )}
      </div>
    );
  }
}
export default injectIntl(NavBarMenu);
