import React, { Component } from "react";
import "./discussion-overview.styles.css";

import { DiscussionList } from "../../components/discussion/discussion-list/discussion-list.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import { FormattedMessage, injectIntl } from "react-intl";
import {PaddingItem} from "../../components/layout/padding-item/padding-item.component";
import { FaListUl, FaDice } from "react-icons/fa";

class DiscussionOverviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagCriteria: "",
    };
  }

  handleRedirect = (id) => {
    this.props.history.push(`/discussion/${id}`);
  };

  filterDiscussions = (discussionInfos, criteria) => {
    console.log(discussionInfos, criteria);

    //filter for search criteria
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

    //filter for tags
    const filteredForTags = [];
    filteredDiscussions.forEach((d) => {
      let containsTag = false;
      d.tags.forEach((t) => {
        if (containsTag) return;

        if (t.toLowerCase().includes(this.state.tagCriteria.toLowerCase())) {
          filteredForTags.push(d);
          containsTag = true;
        }
      });
    });

    return filteredForTags;
  };

  handleTagFieldChanged = (event) => {
    this.setState({ tagCriteria: event.target.value });
  };

  render() {
    console.log("Rendering overview page");

    //Get data passed from previous page
    const { discussionInfos } = this.props;
    let criteria = this.props.match.params.criteria;
    if (criteria === undefined) criteria = "";
    const { intl } = this.props;

    return (
        <div id="overview-container">
          <div className="discussion-container">

            {/*Header info*/}
            <div className="discussion-overview-info-container">
              <PaddingItem/>
              <div id="overview-result-info">
                <div className="discussion-overview-title text-title">
                  <div id="icon-list"><FaListUl /></div>
                  <FormattedMessage id="discussion.overview.title"></FormattedMessage>
                </div>
                <div id="search">
                  <SearchBox
                      placeholder={intl.formatMessage({
                        id: "discussion.overiew.searchtags",
                      })}
                      handleInputChange={this.handleTagFieldChanged}
                  />
                </div>
              </div>
              <PaddingItem/>
              <div id="overview-random-info">
                <div className="overview-random-info-title text-subheader">
                  <div id="icon-random"><FaDice /></div>
                  <div>Random Discussies</div>
                </div>
              </div>
              <PaddingItem/>
            </div>

            {/*content containers */}
            <div id="discussions">
              <PaddingItem/>
              <DiscussionList
                  handleSelectDiscussion={this.props.handleSelectDiscussion}
                  discussionInfos={this.filterDiscussions(discussionInfos, criteria)}
                  handleRedirect={this.handleRedirect}
              />
              <PaddingItem/>
            </div>
          </div>
        </div>
    );
  }
}

export default injectIntl(DiscussionOverviewPage);
