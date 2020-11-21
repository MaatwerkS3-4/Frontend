import React, { Component } from "react";
import CreatePost from "../../components/create-discussion/create-discussion.component.jsx";
import DiscussionListComponent from "../discussions-list/discussion-list.component.jsx";
import "./home.styles.css";

class HomeComponent extends Component {
  state = {
    showCreatePost: false,
  };


  render() {
    return (
      <div id="container">
        <h1>homepage</h1>
      </div>
    );
  }
}

export default HomeComponent;
