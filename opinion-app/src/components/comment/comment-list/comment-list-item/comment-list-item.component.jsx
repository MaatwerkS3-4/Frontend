import React, {Component} from "react";
import "./comment-list-item.styles.css";
import {getTimeDifference} from "../../../../services/date.service";
import {CommentList} from "../comment-list.component";
import {ButtonRegular} from "../../../input/button/button-regular/button-regular.component";
import {isLoggedIn} from "../../../../services/authentication.service";
import {FormattedRelativeTime, injectIntl} from "react-intl";
import Score from "../../../score/score.component";

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
          <div className="icon-container-1">
            {isLoggedIn() && (
              <Score
                handleUpvote={this.props.handleUpvote}
                score={this.props.score}
                commentId={this.props.id}
                upvoted={this.props.upvoted}
              />
            )}
          </div>
          <div>
            <div>
              {" "}
              <FormattedRelativeTime
                value={-1 * getTimeDifference(new Date(this.props.timeStamp))}
                numeric="auto"
                updateIntervalInSeconds="10"
             />
            </div>
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
          handleUpvote={this.props.handleUpvote}
        />
      </div>
    );
  }
}
export default injectIntl(CommentListItem);
