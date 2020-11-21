import React, { Component } from "react";
import "./discussion-comment.styles.css";

export class DiscussionCommentComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: props.content,
            user: props.user,
        }
    }

    render() {
        return(

            <div>
                <span>
                {this.state.content}
              </span>{" "}
                <span className="username">{this.state.user.username}</span>

                <ul id="post-list">

                </ul>

            </div>

        )
    }


}