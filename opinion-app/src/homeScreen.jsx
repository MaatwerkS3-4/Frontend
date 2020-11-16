import React, { Component } from "react";
import CreatePost from "./createPost.jsx";
import PostList from "./postList.jsx";
import "./homeScreen.css";
class HomeScreen extends Component {
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
            Viewpoint
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
          <form className="form-inline my-2 my-lg-0" id="search-form">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <form className="form-inline my-2 my-lg-0">
            <button
              type="button"
              className="form-control mr-sm-2"
              id="create-button"
              onClick={this.handleButtonPress}
            >
              Create Post
            </button>
          </form>
        </nav>
        <div id="content">
          <PostList></PostList>
        </div>
        <CreatePost show={this.state.showCreatePost}></CreatePost>
      </div>
    );
  }
}

export default HomeScreen;
