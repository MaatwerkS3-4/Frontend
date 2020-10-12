import React, { Component } from "react";
import "./createPost.css";
class createPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contains: false,
      subjects: [
        "Zwarte Piet",
        "Klimaatverandering",
        "De Amerikaanse Verkiezingen",
        "Nederlands Migratiebeleid",
        "De EU",
      ],
      modal: false,
    };
  }
  handleInputOnChange = (event) => {
    if (
      this.state.subjects.some(
        (elem) =>
          elem.toUpperCase() ===
          document.getElementById("subject-input").value.toUpperCase()
      )
    ) {
      this.setState({ contains: true });
    } else if (this.state.contains) {
      this.setState({ contains: false });
    }
  };
  handleButtonPress = (event) => {
    console.log("aaaaa");
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
  render() {
    return (
      <div id="container">
        <div className="card" id="create-post-card">
          <div className="card-header">create a post</div>
          <div className="card-body">
            {this.state.contains.toString()}
            {this.state.modal.toString()}
            <br />
            What's your opinion about{" "}
            <input
              type="text"
              list="dropdown"
              placeholder="[subject]"
              className="item"
              id="subject-input"
              onInput={this.handleInputOnChange}
            ></input>
            <datalist id="dropdown">
              {this.state.subjects.map((subject) => (
                <option>{subject}</option>
              ))}
            </datalist>{" "}
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
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Go to duplicate
                </button>
                <button type="button" className="btn btn-secondary">
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
