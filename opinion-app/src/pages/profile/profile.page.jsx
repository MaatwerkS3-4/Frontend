import React, { Component } from "react";
import { DiscussionList } from "../../components/discussion/discussion-list/regular/discussion-list.component";
import { handleGetDiscussionInfosByUser } from "../../services/api.service";
import { FormattedMessage } from "react-intl";
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
      <div>
        <div className="text-headline">{localStorage.getItem("Username")}</div>
        <div className="text-title">
          <FormattedMessage id="profile.yourposts"></FormattedMessage>
        </div>
        <DiscussionList
          discussionInfos={this.state.discussionInfos}
          handleSelectDiscussion={this.props.handleSelectDiscussion}
          handleRedirect={this.handleRedirect}
        />
      </div>
    );
  }
}

export default Profile;
