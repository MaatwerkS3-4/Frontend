import React from "react";
import "./comment-list-item.styles.css";
import { getTimeDifference } from "../../../../services/date.service";
import { CommentList } from "../comment-list.component";
import { ButtonRegular } from "../../../input/button/button-regular/button-regular.component";
import { isLoggedIn } from "../../../../services/authentication.service";
import { injectIntl } from "react-intl";
import { Component } from "react";

class CommentListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { intl } = this.props;
    return (
      <div className="comment-list-item-container">
        <div className="comment-content text-body">{this.props.content}</div>
        <div className="comment-list-item-info-container text-body-secondary">
          <div>
            <div>{getTimeDifference(new Date(this.props.timeStamp))}</div>
          </div>
          <div className="button-reply">
            {isLoggedIn() && (
              <ButtonRegular
                text={intl.formatMessage({ id: "comment.reply" })}
                handleOnClick={() =>
                  this.props.handleShowPostReply(this.props.parent)
                }
              />
            )}
          </div>
        </div>
        <CommentList
          comments={this.props.replies}
          parent={this.props.parent}
          handleShowPostReply={this.props.handleShowPostReply}
        />
      </div>
    );
  }
}
export default injectIntl(CommentListItem);
