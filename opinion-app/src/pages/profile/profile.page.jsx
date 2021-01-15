import React, { Component } from "react";
import { DiscussionList } from "../../components/discussion/discussion-list/regular/discussion-list.component";
import { handleGetDiscussionInfosByUser } from "../../services/api.service";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { PaddingItem } from "../../components/layout/padding-item/padding-item.component";
import "./profile.styles.css";
class Profile extends Component {
  state = {
    discussionInfos: [],
  };
  componentDidMount = () => {
    handleGetDiscussionInfosByUser().then((res) => {
      this.setState({ discussionInfos: res });
    });
    console.log(this.state.discussionInfos);
  };
  handleRedirect = (id) => {
    this.props.history.push(`/discussion/${id}`);
  };
  render() {
    return (
      <div id="profile-container">
        <div id="profile-headlines">
          <div className="text-headline">
            {localStorage.getItem("Username")}
          </div>
          <br></br>
          <div className="text-title">
            <FormattedMessage id="profile.yourposts"></FormattedMessage>
          </div>
        </div>
        <PaddingItem></PaddingItem>
        <div id="profile-list">
          <DiscussionList
            discussionInfos={this.state.discussionInfos}
            handleSelectDiscussion={this.props.handleSelectDiscussion}
            handleRedirect={this.handleRedirect}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
