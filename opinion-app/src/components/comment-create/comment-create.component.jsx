import React, {Component} from "react";
import "./comment-create.styles.css";
import {TextBox} from "../text-box/text-box.component";
import {ButtonAttention} from "../button-attention/button-attention.component";
import {ButtonRegular} from "../button-regular/button-regular.component";

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

    handleCloseClick = () =>{
        this.props.handlePostComment();
    }

    render() {
        return (
            <div className="container">
                <TextBox tag="Bericht"
                         placeholder=""
                         handleInputChange={this.handleContentInputChange}/>
                <ButtonAttention handleClick={this.handlePostClick} content="Plaatsen" />
                <ButtonRegular  handleClick={this.handleCloseClick} content="Sluiten" />
            </div>
        )
    }
}

export default CommentCreate;