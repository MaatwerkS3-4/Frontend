import React, {Component} from "react";
import {TextBox} from "../text-box/text-box.component";
import "./create-discussion.styles.css";
import {postPost} from "../../services/api-service";

class CreateDiscussionComponent extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            subject: '',
        }
    };

    handleSubjectInputChange = (e) =>{
        this.setState({subject: e.target.value});
    }

    handleCreateClick = () =>{
        const discussion = {
            subject: this.state.subject,
            user: this.props.user
        };
        this.props.handleCreateDiscussion (discussion);
    }

    render() {
        return(
            <div className="container">
                <TextBox tag="Subject"
                         placeholder=""
                         handleInputChange={this.handleSubjectInputChange}
                />
                <button onClick={() => this.handleCreateClick()}>Create Discussion</button>
            </div>
        )
    }
}

export default CreateDiscussionComponent;