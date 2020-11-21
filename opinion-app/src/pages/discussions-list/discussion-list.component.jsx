import React, { Component } from "react";
import { getAllPosts } from "../../services/api-service.js";
import "./discussion-list.styles.css";

class DiscussionListComponent extends Component {
  state = {
    posts: [],
  };
  render() {
    return (
      <div id="container">
        <ul id="post-list">
          {this.state.posts.map((post, index) => (
            <li key={index} className="post-list-item">
              <span className="subject">{post.subject}</span>{" "}
              <span className="username">{post.user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    getAllPosts().then((response) => {
      if (response != undefined && response.data != null) {
        console.log(response.data);
        this.setState({ posts: response.data });
      }
    });
  }
}

export default DiscussionListComponent;
