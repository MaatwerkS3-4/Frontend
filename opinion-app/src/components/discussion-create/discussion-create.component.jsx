import React, {Component} from "react";
import {TextBox} from "../text-box/text-box.component";
import "./discussion-create.styles.css";
import {ButtonAttention} from "../button-attention/button-attention.component";
import {ButtonRegular} from "../button-regular/button-regular.component";

class DiscussionCreateComponent extends Component{

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

    handleCloseClick = () =>{
        this.props.handleCreateDiscussion();
    }

    render() {
        return(
            <div className="container">
                <TextBox tag="Onderwerp"
                         placeholder=""
                         handleInputChange={this.handleSubjectInputChange}
                />
                <ButtonAttention handleClick={this.handleCreateClick} content="Aanmaken" />
                <ButtonRegular handleClick={this.handleCloseClick} content="Sluiten" />
            </div>
        )
    }
}

export default DiscussionCreateComponent;