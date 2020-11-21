import React, { Component } from "react";
import CreatePost from "../../components/creatediscussion/creatediscussion.component.jsx";
import DiscussionlistComponent from "../discussionslist/discussionlist.component.jsx";
import "./homepage.styles.css";

class HomepageComponent extends Component {
  state = {
    showCreatePost: false,
  };
  handleButtonPress = (event) => {
    this.setState({ showCreatePost: !this.state.showCreatePost });
  };
  render() {
    return (
      <div id="container">
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
          <a className="navbar-brand" href="#">
            Opinions
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" class="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link disabled">
                  Popular
                </a>
              </li>
            </ul>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <button
              type="button"
              class="form-control mr-sm-2"
              id="create-button"
              onClick={this.handleButtonPress}
            >
              Create Post
            </button>
          </form>
        </nav>
        <div id="content">
          <DiscussionlistComponent></DiscussionlistComponent>
        </div>
        <CreatePost show={this.state.showCreatePost}></CreatePost>
      </div>
    );
  }
}

export default HomepageComponent;
