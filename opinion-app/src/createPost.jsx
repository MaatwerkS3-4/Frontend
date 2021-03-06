import React, {Component} from "react";
import "./createPost.css";
import {getPostBySubString, postPost} from "./apiRequests.js";

class createPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contains: false,
      subjects: [],
      modal: false,
      showDataList: false,
      show: false,
    };
  }
  handleInputOnChange = (event) => {
    if (document.getElementById("subject-input").value.length >= 4) {
      this.setState({ showDataList: true });
      this.updateSuggestList(document.getElementById("subject-input").value);
    } else {
      this.setState({ showDataList: false });
    }
    if (
      this.state.subjects.some(
        (elem) =>
          elem.subject.toUpperCase() ===
          document.getElementById("subject-input").value.toUpperCase()
      )
    ) {
      this.setState({ contains: true });
    } else if (this.state.contains) {
      this.setState({ contains: false });
    }
  };
  handleButtonPress = (event) => {
    if (this.state.contains) {
      this.toggleModal();
    } else {
      this.makePost();
    }
  };
  toggleModal = (event) => {
    if (this.state.modal) {
      this.setState({ modal: false });
    } else {
      this.setState({ modal: true });
    }
  };
  makePost = (event) => {
    let value = document.getElementById("subject-input").value.toString();
    let post = {
      subject: value,
      user: {
        id: 1,
        username: "Potatoman",
        password: "Yes",
      },
    };
    postPost(post);
    this.setState({ show: false });
  };
  updateSuggestList = (substring) => {
    getPostBySubString(substring).then((response) => {
      if (response.data !== null) {
        this.setState({ subjects: response.data });
      }
    });
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
            <span className="title">create a post</span>
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
            </button>{" "}
          </div>
          <div className="card-body">
            What's your opinion about{" "}
            <input
              type="text"
              list="dropdown"
              placeholder="[subject]"
              className="item"
              id="subject-input"
              onInput={this.handleInputOnChange}
            />
            {this.state.showDataList && (
              <datalist id="dropdown" data-testid="dropdown">
                {this.state.subjects.map((subject) => (
                  <option>{subject.subject}</option>
                ))}
              </datalist>
            )}{" "}
            <br />
            <button
              type="button"
              className="btn btn-success item"
              id="create-button"
              onClick={this.handleButtonPress}
            >
              Create Post
            </button>
          </div>
        </div>
        <div
          className="modal"
          role="dialog"
          className={this.state.modal ? "show" : "no-show"}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Duplicate Exists</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  data-dismiss="modal"
                  onClick={this.toggleModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                A post about this subject might already exist
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Go to duplicate
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.makePost}
                >
                  Create anyways
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createPost;
