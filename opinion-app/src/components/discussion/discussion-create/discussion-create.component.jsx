import React, {Component} from "react";
import {TextBoxTag} from "../../input/text-box-tag/text-box-tag.component";
import "./discussion-create.styles.css";
import {ButtonAttention} from "../../input/button/button-attention/button-attention.component";
import {ButtonRegular} from "../../input/button/button-regular/button-regular.component";
import {TextAreaTag} from "../../input/text-area-tag/text-area-tag.component";
import {TextBox} from "../../input/text-box/text-box.component";

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
        this.props.handleCreateDiscussion(this.state.subject, this.state.description);
    }

    handleCloseClick = () => {
        this.props.handleToggleCreateDiscussion();
    }

    render() {
        return (
            <div className="create-container">
                <div className="create-discussion-container">
                    <div className="text-title">Wat moet ik vinden van...</div>
                    <TextBoxTag tag="Onderwerp"
                                placeholder=""
                                handleInputChange={this.handleSubjectInputChange}
                    />
                    <TextAreaTag tag="Toelichting"
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