import React, { Component } from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./comment-list-item.styles.css";
class Vote extends Component {
  state = { voteCount: false };
  toggleVoteCount = () => {
    this.setState({ voteCount: !this.state.voteCount });
  };
  render() {
    return (
      <div className="upvote-container">
        <button className="upvote-button" onClick={this.toggleVoteCount}>
          <FaGraduationCap
            className={this.state.voteCount ? "active gradcap" : "gradcap"}
          />
        </button>
        {this.state.voteCount && <div className="count"> 11 </div>}
      </div>
    );
  }
}

export default Vote;
