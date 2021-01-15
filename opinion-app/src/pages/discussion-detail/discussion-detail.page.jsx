import React, { Component } from "react";
import "./discussion-detail.styles.css";
import { DiscussionInfo } from "../../components/discussion/discussion-info/discussion-info.component";
import { ButtonAttention } from "../../components/input/button/button-attention/button-attention.component";
import CommentCreate from "../../components/comment/comment-create/comment-create.component";
import { ButtonRegular } from "../../components/input/button/button-regular/button-regular.component";
import { CommentList } from "../../components/comment/comment-list/comment-list.component";
import { isLoggedIn } from "../../services/authentication.service";
import { PaddingItem } from "../../components/layout/padding-item/padding-item.component";
import { injectIntl } from "react-intl";

class DiscussionDetailPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCreateComment: false,
      parentComment: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error caught");
    this.props.history.push("/");
  }

  handleCreateComment = (content) => {
    this.handleToggleCreateComment();
    if (this.state.parentComment === null) {
      this.props.handlePostComment(content);
    } else {
      this.props.handlePostReply(this.state.parentComment, content);
    }
  };

  handleToggleCreateComment = (parentComment = null) => {
    this.setState({
      showCreateComment: !this.state.showCreateComment,
      parentComment: parentComment,
    });
  };

  handleBackToOverviewClick = () => {
    this.props.history.goBack();
  };

  render() {
    const discussion = this.props.selectedDiscussion;
    const discussionInfo = this.props.discussionInfo;

    if (discussion === undefined) {
      this.props.history.push("/");
      return null;
    }
    const { intl } = this.props;
    
    if (discussion.description == null || discussion.description == "") {
      return (
        <div id="discussion-content">
          <div id="title-container">
            <PaddingItem />
            <div className="text-title">{discussion.subject}</div>
            <PaddingItem />
          </div>
          <div id="discussion-content-container">
            <PaddingItem />
            <div className="discussion-detail-container">
              <div className="discussion-info">
                <div className="discussion-info-extra">
                  <DiscussionInfo
                    participantCount={discussionInfo.numberOfParticipants}
                    commentCount={discussionInfo.numberOfComments}
                    timeStamp={discussionInfo.timeStamp}
                    tags={discussionInfo.tags}
                    handleUpvote={this.props.handleDiscussionUpvote}
                    score={discussionInfo.score}
                    upvoted={discussionInfo.upvotedByUser}
                  />
                  <div className="discussion-options">
                    <ButtonRegular
                      handleOnClick={this.handleBackToOverviewClick}
                      text={intl.formatMessage({ id: "discussion.detail.back" })}
                    />
                    {isLoggedIn() && (
                      <ButtonAttention
                        handleOnClick={() => this.handleToggleCreateComment(null)}
                        text={intl.formatMessage({
                          id: "discussion.detail.placecomment",
                        })}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div id="discussion-comments-container">
                <CommentList
                  comments={discussion.comments}
                  handleShowPostReply={this.handleToggleCreateComment}
                  handleUpvote={this.props.handleCommentUpvote}
                />
              </div>
            </div>
            <PaddingItem />
          </div>
          {this.state.showCreateComment ? (
            <CommentCreate
              handlePostComment={this.handleCreateComment}
              handleToggleCreateComment={this.handleToggleCreateComment}
              user={this.props.user}
              parentDiscussion={discussion}
            />
          ) : (
            ""
          )}
        </div>
      );
    }


    return (
      <div id="discussion-content">
        <div id="title-container">
          <PaddingItem />
          <div className="text-title">{discussion.subject}</div>
          <PaddingItem />
        </div>
        <div id="discussion-content-container">
          <PaddingItem />
          <div className="discussion-detail-container">
            <div className="discussion-info">
              <div className="discussion-content text-body">
                {discussion.description}
              </div>
              <div className="discussion-info-extra">
                <DiscussionInfo
                  participantCount={discussionInfo.numberOfParticipants}
                  commentCount={discussionInfo.numberOfComments}
                  timeStamp={discussionInfo.timeStamp}
                  tags={discussionInfo.tags}
                  handleUpvote={this.props.handleDiscussionUpvote}
                  score={discussionInfo.score}
                  upvoted={discussionInfo.upvotedByUser}
                />
                <div className="discussion-options">
                  <ButtonRegular
                    handleOnClick={this.handleBackToOverviewClick}
                    text={intl.formatMessage({ id: "discussion.detail.back" })}
                  />
                  {isLoggedIn() && (
                    <ButtonAttention
                      handleOnClick={() => this.handleToggleCreateComment(null)}
                      text={intl.formatMessage({
                        id: "discussion.detail.placecomment",
                      })}
                    />
                  )}
                </div>
              </div>
            </div>
            <div id="discussion-comments-container">
              <CommentList
                comments={discussion.comments}
                handleShowPostReply={this.handleToggleCreateComment}
                handleUpvote={this.props.handleCommentUpvote}
              />
            </div>
          </div>
          <PaddingItem />
        </div>
        {this.state.showCreateComment ? (
          <CommentCreate
            handlePostComment={this.handleCreateComment}
            handleToggleCreateComment={this.handleToggleCreateComment}
            user={this.props.user}
            parentDiscussion={discussion}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default injectIntl(DiscussionDetailPage);
