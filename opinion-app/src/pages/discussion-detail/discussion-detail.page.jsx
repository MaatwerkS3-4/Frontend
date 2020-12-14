<<<<<<< HEAD
import React, { Component } from "react";
import styles from "./discussion-detail.module.css";
import { DiscussionInfo } from "../../components/discussion-info/discussion-info.component";
import { getPostComments, postComment } from "../../services/api.service";
import { CommentList } from "../../components/comment-list/comment-list.component";
import { ButtonAttention } from "../../components/button-attention/button-attention.component";
import CommentCreate from "../../components/comment-create/comment-create.component";
=======
import React, {Component} from "react";
import "./discussion-detail.styles.css";
import {DiscussionInfo} from "../../components/discussion/discussion-info/discussion-info.component";
import {ButtonAttention} from "../../components/input/button/button-attention/button-attention.component";
import CommentCreate from "../../components/comment/comment-create/comment-create.component";
import {ButtonRegular} from "../../components/input/button/button-regular/button-regular.component";
import {CommentList} from "../../components/comment/comment-list/comment-list.component";
>>>>>>> master

class DiscussionDetailPage extends Component {
  constructor(props, context) {
    super(props, context);

<<<<<<< HEAD
    this.state = {
      id: props.match.params.id,
      comments: [],
      showCreateComment: false,
      activeTime: 10,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error caught");
    this.props.history.push("/");
  }

  componentDidMount() {
    this.props.handleToggleLoading(true);
    getPostComments(this.state.id)
      .then((response) => {
        if (response !== undefined && response.data != null) {
          this.setState({ comments: response.data });
        }
      })
      .finally(this.props.handleToggleLoading(false));
  }

  handlePostComment = (comment) => {
    if (comment !== undefined) {
      this.props.handleToggleLoading(true);
      //Creating new comment object
      console.log("Creating new comment...");
      console.log(comment);

      //Send object to backend
      console.log("Sending comment to backend...");
      postComment(comment)
        .then((result) => {
          this.addComment(result.data);
        })
        .finally(() => this.props.handleToggleLoading(false));
    }

    //Close input popup
    console.log("Closing popup...");
    this.handleToggleCreateComment();
  };

  addComment = (comment) => {
    const newComments = [...this.state.comments];
    newComments.push(comment);
    this.setState({ comment: newComments });
  };

  handleToggleCreateComment = () => {
    this.setState({ showCreateComment: !this.state.showCreateComment });
  };

  handleBackToOverviewClick = () => {
    this.props.history.push(`/discussions`);
  };

  render() {
    if (this.props.selectedDiscussion === undefined) {
      this.props.history.push("/");
    } else {
      const discussion = this.props.selectedDiscussion;
      console.log(discussion);
      return (
        <div className={styles.text}>
          <h1>Discussion detail page for id {discussion.id}</h1>
          <DiscussionInfo
            subject={discussion.subject}
            username={discussion.username}
          />
          <hr />
          <span className={styles.spanPadding}>
            {this.state.comments.length} opmerkingen |
          </span>
          <span className={styles.spanPadding}>
            {this.state.comments.length} deelnemers |
          </span>
          <span className={styles.spanPadding}>
            {this.state.activeTime} seconden geleden
          </span>

          <ButtonAttention
            content="Reageer"
            handleClick={this.handlePostComment}
          />
          <button
            className={styles.overviewButton}
            onClick={this.handleBackToOverviewClick}
          >
            terug naar overzicht
          </button>
          <h2 className={styles.commentsHeader}>Opmerkingen</h2>
          <CommentList comments={this.state.comments} />
          {this.state.showCreateComment ? (
            <CommentCreate
              handlePostComment={this.handlePostComment}
              user={this.props.user}
              parentDiscussion={discussion}
            />
          ) : (
            ""
          )}
        </div>
      );
=======
        this.state = {
            showCreateComment: false,
            parentComment: null
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log("error caught");
        this.props.history.push("/");
    }

    handleCreateComment = (content) => {
        this.handleToggleCreateComment();
        if(this.state.parentComment === null){
            this.props.handlePostComment(content);
        }
        else{
            this.props.handlePostReply(this.state.parentComment, content);
        }
    }

    handleToggleCreateComment = (parentComment = null) => {
        this.setState({
            showCreateComment: !this.state.showCreateComment,
            parentComment: parentComment
        });
    };

    handleBackToOverviewClick = () => {
        this.props.history.goBack();
    };

    render() {
        const id = this.props.match.params.id;
        const discussion = this.props.selectedDiscussion;
        const discussionInfo = this.props.discussionInfo;

        if (discussion === undefined) {
            this.props.history.push("/");
            return null;
        }
        return (
            <div className="discussion-detail-container">
                <div className="discussion-info">
                    <div className="text-title">
                        {discussion.subject}
                    </div>
                    <div className="discussion-content text-body">
                        {discussion.description}
                    </div>
                    <div className="discussion-info-extra">
                        <DiscussionInfo participantCount={discussionInfo.numberOfParticipants}
                                        commentCount={discussionInfo.numberOfComments}
                                        timeStamp={discussionInfo.timeStamp}/>
                        <div className="discussion-options">
                            <ButtonRegular handleOnClick={this.handleBackToOverviewClick} text="terug naar overzicht"/>
                            <ButtonAttention handleOnClick={this.handleToggleCreateComment} text="Opmerking plaatsen"/>
                        </div>
                    </div>
                </div>
                <div id="discussion-comments-container">
                    <CommentList
                        comments={discussion.comments}
                        handleShowPostReply={this.handleToggleCreateComment}
                    />
                </div>


                {this.state.showCreateComment ? <CommentCreate
                    handlePostComment={this.handleCreateComment}
                    handleToggleCreateComment={this.handleToggleCreateComment}
                    user={this.props.user}
                    parentDiscussion={discussion}
                /> : ""}
            </div>
        )
>>>>>>> master
    }
  }
}

export default DiscussionDetailPage;
