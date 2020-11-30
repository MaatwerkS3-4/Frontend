import React, {Component} from "react";
import styles from "./discussion-detail.module.css";
import {DiscussionInfo} from "../../components/discussion-info/discussion-info.component";
import {getPostComments, postComment} from "../../services/api.service";
import {CommentList} from "../../components/comment-list/comment-list.component";
import {ButtonAttention} from "../../components/button/button-attention/button-attention.component";
import CommentCreate from "../../components/comment-create/comment-create.component";

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
        this.setState({comment: newComments});
    };


    handleToggleCreateComment = () => {
        this.setState({showCreateComment: !this.state.showCreateComment});
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
                    <DiscussionInfo subject={discussion.subject}
                                    username={discussion.user.username}/>
                    <hr/>
                    <span className={styles.spanPadding}>{this.state.comments.length} opmerkingen |</span>
                    <span className={styles.spanPadding}>{this.state.comments.length} deelnemers |</span>
                    <span className={styles.spanPadding}>{this.state.activeTime} seconden geleden</span>

                    <ButtonAttention content="Reageer" handleClick={this.handlePostComment}/>
                    <button className={styles.overviewButton} onClick={this.handleBackToOverviewClick}>terug naar
                        overzicht
                    </button>
                    <h2 className={styles.commentsHeader}>Opmerkingen</h2>
                    <CommentList comments={this.state.comments}/>
                    {this.state.showCreateComment ? <CommentCreate
                        handlePostComment={this.handlePostComment}
                        user={this.props.user}
                        parentDiscussion={discussion}
                    /> : ""}
                </div>
            )
        }
    }
}
export default DiscussionDetailPage;
