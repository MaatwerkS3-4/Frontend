import React, {Component} from "react";
import "./discussion-detail.styles.css";
import {DiscussionInfo} from "../../components/discussion/discussion-info/discussion-info.component";
import {ButtonAttention} from "../../components/input/button/button-attention/button-attention.component";
import CommentCreate from "../../components/comment/comment-create/comment-create.component";
import {ButtonRegular} from "../../components/input/button/button-regular/button-regular.component";
import {CommentList} from "../../components/comment/comment-list/comment-list.component";

class DiscussionDetailPage extends Component {
    constructor(props, context) {
        super(props, context);

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
                                        timeStamp={discussionInfo.timeStamp}
                                        tags={discussionInfo.tags}/>
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
    }
}

export default DiscussionDetailPage;
