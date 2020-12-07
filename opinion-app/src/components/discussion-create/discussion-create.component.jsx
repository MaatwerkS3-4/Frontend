import React, {Component} from "react";
import {TextBox} from "../text-box/text-box.component";
import "./discussion-create.styles.css";
import {ButtonAttention} from "../button/button-attention/button-attention.component";
import {ButtonRegular} from "../button/button-regular/button-regular.component";
import {TextArea} from "../text-area/text-area.component";

class DiscussionCreateComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            subject: '',
            description: '',
        }
    };

    handleSubjectInputChange = (e) => {
        this.setState({subject: e.target.value});
    };

    handleDescriptionInputChange = (e) => {
        this.setState({description: e.target.value});
    };

    handleCreateClick = () => {
        const discussion = {
            subject: this.state.subject,
            user: this.props.user
        };
        this.props.handleCreateDiscussion(discussion);
    }

    handleCloseClick = () => {
        this.props.handleCreateDiscussion();
    }

    render() {
        return (
            <div className="create-container">
                <div className="create-discussion-container">
                    <div className="discussion-title">Wat moet ik vinden van...</div>
                    <TextBox tag="Onderwerp"
                             placeholder=""
                             handleInputChange={this.handleSubjectInputChange}
                    />
                    <TextArea tag="Toelichting"
                              placeholder=""
                              handleInputChange={this.handleDescriptionInputChange}
                    />
                    <div className="create-discussion-options">
                        <ButtonRegular handleOnClick={this.handleCloseClick} text="Sluiten"/>
                        <ButtonAttention handleOnClick={this.handleCreateClick} text="Aanmaken"/>
                    </div>

                </div>
                <div className="create-discussion-overlay" onClick={() => this.handleCloseClick()}/>
            </div>
        )
    }
}

export default DiscussionCreateComponent;