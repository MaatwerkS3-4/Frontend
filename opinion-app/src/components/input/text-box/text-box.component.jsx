import React, {Component} from "react";
import "./text-box.styles.css";

class TextBox extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  handleKeyDown = (e) => {
    if (this.props.handleEnterPress && e.keyCode === 13) {
      this.props.handleEnterPress();
    }
  };
  render() {
    return (
      <input
        type={this.props.type}
        className="textbox-field text-body"
        onChange={this.props.handleInputChange}
        placeholder={this.props.placeholder}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
export default TextBox;
