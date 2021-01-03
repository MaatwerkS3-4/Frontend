import React, { Component } from "react";
import { TextBoxTag } from "../../input/text-box-tag/text-box-tag.component";
import "./discussion-create.styles.css";
import { ButtonAttention } from "../../input/button/button-attention/button-attention.component";
import { ButtonRegular } from "../../input/button/button-regular/button-regular.component";
import { TextAreaTag } from "../../input/text-area-tag/text-area-tag.component";
import { FormattedMessage, injectIntl } from "react-intl";

class DiscussionCreateComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      subject: "",
      description: "",
      tags: ["", "", ""],
    };
  }

  handleSubjectInputChange = (e) => {
    this.setState({ subject: e.target.value });
  };

  handleDescriptionInputChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleCreateClick = () => {
    this.props.handleCreateDiscussion(
      this.state.subject,
      this.state.description,
      this.state.tags
    );
  };

  handleCloseClick = () => {
    this.props.handleToggleCreateDiscussion();
  };

  handleTagInputChange = (value, index) => {
    const newTags = [...this.state.tags];
    newTags[index] = value;
    this.setState({ tags: newTags });
  };

  handleTagInputFirst = (e) => {
    this.handleTagInputChange(e.target.value, 0);
  };

  handleTagInputSec = (e) => {
    this.handleTagInputChange(e.target.value, 1);
  };

  handleTagInputThird = (e) => {
    this.handleTagInputChange(e.target.value, 2);
  };

  render() {
    const { intl } = this.props;

    return (
      <div className="create-container">
        <div className="create-discussion-container">
          <div className="text-title">
            <FormattedMessage id="discussion.create.title"></FormattedMessage>
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
          <div className="create-discussion-tags-container">
            <TextBoxTag
              tag="Tag"
              placeholder=""
              handleInputChange={this.handleTagInputFirst}
            />
            <TextBoxTag
              tag="Tag"
              placeholder=""
              handleInputChange={this.handleTagInputSec}
            />
            <TextBoxTag
              tag="Tag"
              placeholder=""
              handleInputChange={this.handleTagInputThird}
            />
          </div>
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
