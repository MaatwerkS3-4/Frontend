import React, { Component } from "react";
import "./createPost.css";
import {postPost} from "./apiRequests.js";
import {getPostBySubString} from "./apiRequests.js";
class createPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contains: false,
      subjects: [
        {
          id: 1,
          subject : "Zwarte Piet"
        },
        {
          id: 2,
          subject: "Klimaatverandering"},
        {id : 3, subject : "De Amerikaanse Verkiezingen"},
        {id: 4, subject : "Nederlands Migratiebeleid"},
        {id : 5, subject : "De EU"}
      ],
      modal: false,
      post: {
        userId : "",
        content : ""
      },
      showDataList : false,
      show : false
    };
  }
  handleInputOnChange = (event) => {
    if (document.getElementById("subject-input").value.length >= 4) {
      this.setState({showDataList : true});
    }
    else {
      this.setState({showDataList : false});
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
    }
  };
  toggleModal = (event) => {
    if (this.state.modal) {
      this.setState({ modal: false });
    } else {
      this.setState({ modal: true });
    }
  };
  createPost = (event) => {
    postPost(this.state.post);
  };
  updateSuggestList = (substring) => {
    let result;
    result = getPostBySubString(substring);
    if (result !== null) {
      this.setState({subjects : result})
    }
  };
  closeButtonClick = (event) => {
    this.setState({show : false})
  }
  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.show === "boolean") {
    this.setState({show : nextProps.show})
    }
  }
  render() {
    return (
      <div id="container">
        <div className={this.state.show ? "show card" : "no-show"} id="create-post-card">
          <div className="card-header">create a post <button type="button" onClick={this.closeButtonClick}>close</button>     </div>
          <div className="card-body">
            What's your opinion about{" "}
            <input
              type="text"
              list="dropdown"
              placeholder="[subject]"
              className="item"
              id="subject-input"
              onInput={this.handleInputOnChange}
            ></input>
            { this.state.showDataList &&
            <datalist id="dropdown">
              {this.state.subjects.map((subject) => (
                <option>{subject.subject}</option>
              ))}
            </datalist>
  }{" "}
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
              <div className="modal-body">A post about this subject might already exist</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Go to duplicate
                </button>
                <button type="button" className="btn btn-secondary" onClick={this.createPost}>
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
