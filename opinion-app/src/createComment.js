import React, { Component } from "react";
import "./createPost.css";
import { postComment } from "./apiRequests.js";

class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentPost: props.parentPost,
            contains: false,
            modal: false,
            showDataList: false,
            show: false,
        };
    }

    handleButtonPress = (event) => {
            this.makeComment();
    };

    makeComment = (event) => {
        let value = document.getElementById("subject-input").value.toString();
        if(value === ""){
            return;
        }
        let comment = {
            content: value,
            user: {
                id: 1,
                username: "Potatoman",
                password: "Yes",
            },
            post: this.state.parentPost,
        };
        postComment(comment);
        this.setState({ show: false });
        window.location.reload();
    };

    closeButtonClick = (event) => {
        this.setState({ show: false });
    };
    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.show === "boolean") {
            this.setState({ show: !this.state.show });
        }
    }
    render() {
        return (
            <div id="create-post-container">
                <div
                    className={this.state.show ? "show card" : "no-show"}
                    id="create-post-card"
                >
                    <div className="card-header">
                        <span className="title">create a comment</span>
                        <button
                            type="button"
                            className="btn btn-danger close-button"
                            onClick={this.closeButtonClick}
                        >
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="bi bi-x"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="card-body">
                        <input type="text" placeholder="[subject]" className="item" id="subject-input"/>
                        <br />
                        <button
                            type="button"
                            className="btn btn-success item"
                            id="create-button"
                            onClick={this.handleButtonPress}
                        >
                            Create Comment
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateComment;