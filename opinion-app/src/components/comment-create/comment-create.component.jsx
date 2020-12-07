import React, {Component} from "react";
import "./comment-create.styles.css";
import {TextArea} from "../text-area/text-area.component";
import {TextBox} from "../text-box/text-box.component";
import {ButtonAttention} from "../button/button-attention/button-attention.component";
import {ButtonRegular} from "../button/button-regular/button-regular.component";

class CommentCreate extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            content: ""
        };
    }

    handleContentInputChange = (e) => {
        this.setState({content: e.target.value});
    }

    handlePostClick = () => {
        const comment = {
            content: this.state.content,
            user: this.props.user,
            post: this.props.parentDiscussion
        };

        this.props.handlePostComment(comment);
    }

    handleCloseClick = () => {
        this.props.handlePostComment();
    }

    render() {
        return (
            <div className="create-container">
                <div className="create-comment-container">
                    <div className="comment-title">Wat ik hier van vind...</div>
                    <TextArea tag="Opmerking"
                              placeholder=""
                              handleInputChange={this.handleContentInputChange}/>
                    <div className="create-comment-options">
                        <ButtonRegular handleOnClick={this.handleCloseClick} text="Sluiten"/>
                        <ButtonAttention handleOnClick={this.handlePostClick} text="Plaatsen"/>
                    </div>
                </div>
                <div className="create-comment-overlay" onClick={() => this.handleCloseClick()}/>
            </div>
        )
    }
}

export default CommentCreate;