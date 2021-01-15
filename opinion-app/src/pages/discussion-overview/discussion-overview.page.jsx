import React, { Component } from "react";
import "./discussion-overview.styles.css";

import { DiscussionList } from "../../components/discussion/discussion-list/regular/discussion-list.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import { FormattedMessage, injectIntl } from "react-intl";
import { PaddingItem } from "../../components/layout/padding-item/padding-item.component";
import { FaDice, FaListUl, FaQuestionCircle } from "react-icons/fa";
import { DiscussionListSmall } from "../../components/discussion/discussion-list/small/discussion-list-small.component";

class DiscussionOverviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagCriteria: "",
      randomSelection: [],

      filteredDiscussions: [],
      reverseDiscussions: [],

      discussionInfos: this.props.discussionInfos,
      criteria: this.props.match.params.criteria,
    };
  }

  componentDidMount() {
    //Randomize discussions
    const randomDiscussions = [...this.props.discussionInfos];
    randomDiscussions.sort(() => Math.random() - 0.5);

    //Set amount to show in side overviews
    let n = 5;

    //Set criteria to blank if not defined
    let criteria = this.state.criteria;
    if (criteria === undefined) criteria = "";

    //Filter the existing discussions for the provided criteria
    const filteredDiscussions = [];
    this.state.discussionInfos.forEach((d) => {
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
    console.log(filteredDiscussions);

    if (filteredDiscussions.length > 0) {
      //Get the most prominent category in the search result
      let pairs = new Map();
      filteredDiscussions.forEach((d) => {
        d.tags.forEach((t) => {
          if (!pairs.has(t)) {
            pairs.set(t, 1);
          } else {
            let value = pairs.get(t);
            pairs.set(t, value++);
          }
        });
      });
      console.log("pairs", pairs);
      let maxValue = 0;
      let category = undefined;

      pairs.forEach((v, k) => {
        if (category === undefined || v > maxValue) {
          category = k;
          maxValue = v;
        }
      });

      console.log("Most prominent: ", category);

      //Retrieve the reverse of the most prominent category
      const reverseCategory = this.props.reverseRecommendations.find(
          (c) => c.first === category
      ).second;

      //Randomize the existing discussions and get a short list of reverse recommendations
      randomDiscussions.sort(() => Math.random() - 0.5);
      const reverseDiscussions = [];

      let count = 0;
      randomDiscussions.forEach((d) => {
        if (count >= n) return;
        if (d.tags.includes(reverseCategory)) {
          reverseDiscussions.push(d);
          count++;
        }
      });


      //Update state with created overviews
      this.setState({
        filteredDiscussions: filteredDiscussions,
        reverseDiscussions: reverseDiscussions,
      });
    }
    //Create a short list of random discussions for side overview
    randomDiscussions.sort(() => Math.random() - 0.5);
    const randomSelection = [];

    let count = 0;
    randomDiscussions.forEach((d) => {
      if (count >= n) return;
      randomSelection.push(d);
      count++;
    });

    this.setState({randomSelection: randomSelection})
  }

  handleRedirect = (id) => {
    this.props.history.push(`/discussion/${id}`);
  };

  handleTagFieldChanged = (event) => {
    this.setState({ tagCriteria: event.target.value });
  };

  filterForTags = () => {
    //filter the criteria-filtered discussions for the tag search box
    const filteredForTags = [];
    this.state.filteredDiscussions.forEach((d) => {
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

  render() {
    const { intl } = this.props;

    return (
      <div id="overview-container">
        <div className="discussion-container">
          {/*Header info*/}
          <div className="discussion-overview-info-container">
            <PaddingItem />
            <div id="overview-result-info">
              <div className="discussion-overview-title text-title">
                <div id="icon-list">
                  <FaListUl />
                </div>
                <FormattedMessage id="discussion.overview.title"/>
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
            <PaddingItem />
            <div id="overview-random-info">
              <div className="overview-random-info-title text-subheader">
                <div id="icon-random">
                  <FaDice />
                </div>
                <div>
                  <FormattedMessage id="discussion.overview.random"/>
                </div>
              </div>
            </div>
            <PaddingItem />
          </div>

          {/*content containers */}
          <div id="discussions">
            <PaddingItem />
            <div id="discussions-container-main">
              <DiscussionList
                handleSelectDiscussion={this.props.handleSelectDiscussion}
                discussionInfos={this.filterForTags()}
                handleRedirect={this.handleRedirect}
              />
            </div>
            <PaddingItem />

            <div id="discussions-container-side">
              <DiscussionListSmall
                handleSelectDiscussion={this.props.handleSelectDiscussion}
                discussionInfos={this.state.randomSelection}
                handleRedirect={this.handleRedirect}
              />

              <div className="overview-reverse-container">
                <div id="overview-reverse-info">
                  <div className="overview-reverse-info-title text-subheader">
                    <div id="icon-random">
                      <FaQuestionCircle />
                    </div>
                    <div>
                      <FormattedMessage id="discussions.overview.interesting"/>
                    </div>
                  </div>
                </div>
                <DiscussionListSmall
                  handleSelectDiscussion={this.props.handleSelectDiscussion}
                  discussionInfos={this.state.reverseDiscussions}
                  handleRedirect={this.handleRedirect}
                />
              </div>
            </div>

            <PaddingItem />
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(DiscussionOverviewPage);
