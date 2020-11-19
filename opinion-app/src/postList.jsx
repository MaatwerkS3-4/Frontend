import React, { Component } from "react";
import { getAllPosts } from "./apiRequests.js";
import "./postList.css";
import {Post} from "./post";

class PostList extends Component {
  state = {
    posts: [],
  };
  render() {
    return (
      <div id="container">
        <ul id="post-list">
          {this.state.posts.map((post, index) => (
            <li key={index} className="post-list-item">

              <Post id = {post.id} subject = {post.subject} user = {post.user} thisPost = {post}/>

            </li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    getAllPosts().then((response) => {
      if (response !== undefined && response.data != null) {

        this.setState({ posts: response.data });
      }
    });
  }
}

export default PostList;
