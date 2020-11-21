import React, { Component } from "react";
import CreatePost from "../../components/creatediscussion/creatediscussion.component.jsx";
import DiscussionlistComponent from "../discussionslist/discussionlist.component.jsx";
import "./homepage.styles.css";

class HomepageComponent extends Component {
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

export default HomepageComponent;
