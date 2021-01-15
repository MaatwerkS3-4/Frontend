import React, {Component} from "react";
import "./comment-create.styles.css";
import {TextAreaTag} from "../../input/text-area-tag/text-area-tag.component";
import {ButtonAttention} from "../../input/button/button-attention/button-attention.component";
import {ButtonRegular} from "../../input/button/button-regular/button-regular.component";

class CommentCreate extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            content: "",
            buttonDisabled: true
        };
    }

    handleContentInputChange = (e) => {
        this.setState({content: e.target.value});
        
        this.handleButtonStateChange(e.target.value);
    }

    handlePostClick = () => {
        this.props.handlePostComment(this.state.content);
    }

    handleCloseClick = () => {
        this.props.handleToggleCreateComment();
    }

    handleButtonStateChange = (contentText) =>{
        if (contentText !== "" && contentText != null) {
            this.setState({buttonDisabled: false});
          return
        }
        this.setState({buttonDisabled: true});
      }

    render() {
        return (
            <div className="create-container">
                <div className="create-comment-container">
                    <div className="text-title">Wat ik hier van vind...</div>
                    <TextAreaTag tag="Opmerking"
                                 placeholder=""
                                 handleInputChange={this.handleContentInputChange}/>
                    <div className="create-comment-options">
                        <ButtonRegular handleOnClick={this.handleCloseClick} text="Sluiten"/>
                        <ButtonAttention handleOnClick={this.handlePostClick} text="Plaatsen" disabled={this.state.buttonDisabled}/>
                    </div>
                </div>
                <div className="create-comment-overlay" onClick={() => this.handleCloseClick()}/>
            </div>
        )
    }
}

export default CommentCreate;