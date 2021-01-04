import React, { Component } from "react";
import { TextBoxTag } from "../../input/text-box-tag/text-box-tag.component";
import "./discussion-create.styles.css";
import { ButtonAttention } from "../../input/button/button-attention/button-attention.component";
import { ButtonRegular } from "../../input/button/button-regular/button-regular.component";
import { TextAreaTag } from "../../input/text-area-tag/text-area-tag.component";
import { FormattedMessage, injectIntl } from "react-intl";
import {Checkbox} from "../../input/checkbox/checkbox.component";
import CheckboxGroup from "../../input/checkbox/checkbox-group/checkbox-group.component";

class DiscussionCreateComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      subject: "",
      description: "",
      checkboxes: []
    };
  }

  handleSubjectInputChange = (e) => {
    this.setState({ subject: e.target.value });
  };

  handleDescriptionInputChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleCreateClick = () => {
    const categories = [];
    this.state.checkboxes.forEach(c => {
      if(c.checked) categories.push(c.value)
    })
    this.props.handleCreateDiscussion(
      this.state.subject,
      this.state.description,
      categories
    );
  };

  handleCloseClick = () => {
    this.props.handleToggleCreateDiscussion();
  };

  handleCheckboxChange = (checkboxes) => {
    console.log("checkboxes changed", checkboxes);
    this.setState({checkboxes: checkboxes});
  }

  render() {
    const { intl } = this.props;

    return (
      <div className="create-container">
        <div className="create-discussion-container">
          <div className="text-title">
            <FormattedMessage id="discussion.create.title"/>
          </div>
          <TextBoxTag
            tag={intl.formatMessage({ id: "discussion.create.subject" })}
            placeholder=""
            handleInputChange={this.handleSubjectInputChange}
          />

          <TextAreaTag
            tag={intl.formatMessage({ id: "discussion.create.explanation" })}
            placeholder=""
            handleInputChange={this.handleDescriptionInputChange}
          />

          <CheckboxGroup
              name="Tags"
              maxAmountChecked={3}
              values={this.props.categories}
              handleCheckboxChange={this.handleCheckboxChange}
              checkboxes={this.state.checkboxes}
          />

          <div className="create-discussion-options">
            <ButtonRegular
              handleOnClick={this.handleCloseClick}
              text={intl.formatMessage({ id: "discussion.create.close" })}
            />
            <ButtonAttention
              handleOnClick={this.handleCreateClick}
              text={intl.formatMessage({ id: "discussion.create.create" })}
            />
          </div>
        </div>
        <div
          className="create-discussion-overlay"
          onClick={() => this.handleCloseClick()}
        />
      </div>
    );
  }
}

export default injectIntl(DiscussionCreateComponent);
