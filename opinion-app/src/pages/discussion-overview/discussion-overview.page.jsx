import React, { Component } from "react";
import "./discussion-overview.styles.css";
import { FormattedMessage } from "react-intl";
import { DiscussionList } from "../../components/discussion/discussion-list/discussion-list.component";

class DiscussionOverviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleRedirect = (id) => {
    this.props.history.push(`/discussion/${id}`);
  };

  filterDiscussions = (discussionInfos, criteria) => {
    console.log(discussionInfos, criteria);
    const filteredDiscussions = [];
    discussionInfos.forEach((d) => {
      if (d.subject.toLowerCase().includes(criteria.toLowerCase())) {
        filteredDiscussions.push(d);
        return;
      }
      let containersCriteria = false;
      d.tags.forEach((t) => {
        if (containersCriteria) return;
        containersCriteria = t.toLowerCase().includes(criteria.toLowerCase());
        if (containersCriteria) {
          filteredDiscussions.push(d);
        }
      });
    });
    return filteredDiscussions;
  };

  render() {
    console.log("Rendering overview page");

    //Get data passed from previous page
    const { discussionInfos } = this.props;
    let criteria = this.props.match.params.criteria;
    if (criteria === undefined) criteria = "";

    return (
      <div className="discussion-container">
        <div className="discussion-overview-title text-title">
          {criteria === "" ? (
            <FormattedMessage id="discussion.overview.title"></FormattedMessage>
          ) : (
            <div>
              Discussies gefilterd voor:{" "}
              <span className="text-attention">{criteria}</span>
            </div>
          )}
        </div>
        <DiscussionList
          handleSelectDiscussion={this.props.handleSelectDiscussion}
          discussionInfos={this.filterDiscussions(discussionInfos, criteria)}
          handleRedirect={this.handleRedirect}
        />
      </div>
    );
  }
}

export default DiscussionOverviewPage;
