import React, {Component} from "react";
import "./discussion-detail.styles.css";
import {DiscussionInfo} from "../../components/discussion-info/discussion-info.component";
import {getPostComments, postComment} from "../../services/api.service";
import {CommentList} from "../../components/comment-list/comment-list.component";
import {ButtonAttention} from "../../components/button/button-attention/button-attention.component";
import CommentCreate from "../../components/comment-create/comment-create.component";
import {ButtonRegular} from "../../components/button/button-regular/button-regular.component";

class DiscussionDetailPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.match.params.id,
            comments: [],
            showCreateComment: false,
            activeTime: 10
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
                    this.setState({comments: response.data});
                }
            })
            .finally(this.props.handleToggleLoading(false));
    };

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
        this.setState({comment: newComments});
    };


    handleToggleCreateComment = () => {
        this.setState({showCreateComment: !this.state.showCreateComment});
    };

    handleBackToOverviewClick = () => {
        this.props.history.push(`/discussions`);
    };

    render() {
        const discussion = this.props.selectedDiscussion;
        if(discussion === undefined){
            this.props.history.push("/");
            return null;
        }
        return (
            <div className="discussion-detail-container">
                <div className="discussion-info">
                    <div className="discussion-title">
                        {discussion.subject}
                    </div>
                    <div className="discussion-content">
                        Nog te implementeren...
                    </div>
                    <div className="discussion-info-extra">
                        <DiscussionInfo discussion={discussion}/>
                        <div className="discussion-options">
                            <ButtonRegular handleOnClick={this.handleBackToOverviewClick} text="terug naar overzicht"/>
                            <ButtonAttention handleOnClick={this.handlePostComment} text="Opmerking plaatsen"/>
                        </div>
                    </div>

                </div>
                {/*<CommentList comments={discussion.comments}/>*/}
                {this.state.showCreateComment ? <CommentCreate
                    handlePostComment={this.handlePostComment}
                    user={this.props.user}
                    parentDiscussion={discussion}
                /> : ""}
            </div>
        )
    }
}

export default DiscussionDetailPage;
