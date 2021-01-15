import React, { Component } from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./score.styles.css";
class Score extends Component {
  constructor(props) {
    super(props);
    this.state = { showVoteCount: false, score: 0 };
  }
  toggleShowVoteCount = () => {
    if (!this.state.showVoteCount) {
      if (this.props.commentId) {
        this.props.handleUpvote(this.props.commentId);
      } else {
        this.props.handleUpvote();
      }
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({ showVoteCount: true });
  };
  componentDidMount = () => {
    if (this.props.upvoted === true) this.setState({ showVoteCount: true });
    this.setState({ score: this.props.score });
  };
  render() {
    return (
      <div className="upvote-container">
        <button className="upvote-button" onClick={this.toggleShowVoteCount}>
          <FaGraduationCap
            className={this.state.showVoteCount ? "active gradcap" : "gradcap"}
          />
        </button>
        {this.state.showVoteCount && (
          <div className="count"> {this.state.score} </div>
        )}
      </div>
    );
  }
}

export default Score;
