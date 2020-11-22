import React, {Component} from "react";
import "./discussion-detail.styles.css";
import {DiscussionInfo} from "../../components/discussion-info/discussion-info.component";
import {getPostComments, postComment} from "../../services/api.service";
import {CommentList} from "../../components/comment-list/comment-list.component";
import {ButtonAttention} from "../../components/button-attention/button-attention.component";
import CommentCreate from "../../components/comment-create/comment-create.component";

class DiscussionDetailPage extends Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.match.params.id,
            comments: [],
            showCreateComment: false
        };
    }

    componentDidMount() {
        getPostComments(this.state.id).then((response) => {
            if (response !== undefined && response.data != null) {
                this.setState({comments: response.data});
            }
        });
    }

    handlePostComment = (comment) =>{
        if(comment !== undefined){
            //Creating new comment object
            console.log("Creating new comment...");
            console.log(comment);

            //Send object to backend
            console.log("Sending comment to backend...");
            postComment(comment).then((result) => {
                this.addComment(result.data);
            })
        }

        //Close input popup
        console.log("Closing popup...")
        this.handleToggleCreateComment();
    }

    addComment = (comment) => {
        const newComments = [...this.state.comments];
        newComments.push(comment);
        this.setState({comment: newComments});
    }

    handleToggleCreateComment = () => {
        this.setState({showCreateComment: !this.state.showCreateComment});
    }

    render() {
        const discussion = this.props.selectedDiscussion;
        console.log(discussion);
        return (
            <div>
                <h1>Discussion detail page for id {discussion.id}</h1>
                <DiscussionInfo subject={discussion.subject}
                                username={discussion.user.username}/>
                <hr/>
                <ButtonAttention content="Reageer" handleClick={this.handlePostComment} />
                <hr/>
                <h2>Opmerkingen</h2>
                <CommentList comments={this.state.comments} />
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

