import React, {Component} from "react";
import "./discussion-detail.styles.css";
import {DiscussionComponent} from "../../components/discussion/discussion.component";
import {getAllPosts} from "../../services/api-service";

class DiscussionDetailComponent extends Component{

    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.match.params.id,
        };
    }

    render() {
        const discussion = this.props.selectedDiscussion;
        console.log(discussion);
        return (
            <div>
                <h1>Discussion detail page for id {discussion.id}</h1>
                <DiscussionComponent id = {discussion.id} subject = {discussion.subject} user = {discussion.user} thisPost = {discussion}/>
            </div>
        )
    }
}

export default DiscussionDetailComponent;

