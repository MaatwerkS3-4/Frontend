import React, {Component} from "react";
import "./discussion.styles.css";
import {DiscussionCommentComponent} from "../discussion-comment/discussion-comment.component";
import {getPostComments} from "../../services/api-service";
import CreateComment from "../../createComment";

export class DiscussionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            subject: props.subject,
            user: props.user,
            comments: [],
            thisPost: props.thisPost,
            showCreateComment: false,
        }
    }

    componentDidMount() {
        getPostComments(this.state.id).then((response) => {
            if (response !== undefined && response.data != null) {
                this.setState({comments: response.data});
            }
        });
    }

    renderComments = () =>{
        if (this.state.comments.length !== 0) {
            return (
                this.state.comments.map((comment, index) => (
                    <li key={index} className="post-list-item">
                        <DiscussionCommentComponent content={comment.content} user={comment.user}/>
                    </li>
                ))
            )
        }
    }

    handleButtonPress = () => {
        this.setState({showCreateComment: !this.state.showCreateComment});
    }

    render() {
        console.log(this)
        return (

            <div>
                <span className="subject">
                What do you think about {this.state.subject}?
              </span>{" "}
                <span className="username">{this.state.user.username}</span>
                <ul id="post-list">
                    {this.renderComments()}
                </ul>
                <button
                    type="button"
                    className="form-control mr-sm-2"
                    id="create-button"
                    onClick={this.handleButtonPress}
                >
                    Comment
                </button>
                <CreateComment parentPost={this.state.thisPost} show={this.state.showCreateComment}/>
            </div>

        )
    }


}