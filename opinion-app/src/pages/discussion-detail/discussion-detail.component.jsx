import React, {Component} from "react";
import "./discussion-detail.styles.css";
import {DiscussionComponent} from "../../components/discussion/discussion.component";

class DiscussionDetailComponent extends Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.match.params.id
        };
    }

    render() {
        return (
            <div>
                <h1>Discussion detail page for id {this.state.id}</h1>
                {/*<DiscussionComponent id = {post.id} subject = {post.subject} user = {post.user} thisPost = {post}/>*/}
            </div>
        )
    }
}

export default DiscussionDetailComponent;

