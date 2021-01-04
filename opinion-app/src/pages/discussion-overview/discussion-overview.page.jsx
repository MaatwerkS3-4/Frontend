import React, { Component } from "react";
import "./discussion-overview.styles.css";

import { DiscussionList } from "../../components/discussion/discussion-list/regular/discussion-list.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import { FormattedMessage, injectIntl } from "react-intl";
import {PaddingItem} from "../../components/layout/padding-item/padding-item.component";
import { FaListUl, FaDice } from "react-icons/fa";
import {DiscussionListSmall} from "../../components/discussion/discussion-list/small/discussion-list-small.component";

class DiscussionOverviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagCriteria: "",
      randomSelection: [],
      prominentCategory: undefined,
      filteredDiscussions: [],

      discussionInfos: this.props.discussionInfos,
      criteria: this.props.match.params.criteria
    };
  }

  componentDidMount() {
    const randomDiscussions = [...this.props.discussionInfos]
    randomDiscussions.sort(() => Math.random() - 0.5);
    let n = 5;

    if(randomDiscussions.size < n){
      n = randomDiscussions.size;
    }

    let criteria = this.state.criteria;
    if (criteria === undefined) criteria = "";

    //filter for search criteria
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

    //Get most prominent category
    let pairs = new Map();
    filteredDiscussions.forEach(d => {
      d.tags.forEach(t =>{
        if(!pairs.has(t)){
          pairs.set(t, 1)
        }
        else{
          let value = pairs.get(t);
          pairs.set(t, value++);
        }
      })
    })
    console.log("pairs", pairs);
    let maxValue = 0;
    let category = undefined;

    pairs.forEach((v, k) => {
      if(category === undefined || v > maxValue){
        category = k;
        maxValue = v;
      }
    })
    console.log("Most prominent: ", category);

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

    this.setState({randomSelection: randomDiscussions.slice(0, n),
    filteredDiscussions: filteredForTags,
    prominentCategory: category});
  }

  handleRedirect = (id) => {
    this.props.history.push(`/discussion/${id}`);
  };

  filterDiscussions = (discussionInfos, criteria) => {

  };

  handleTagFieldChanged = (event) => {
    this.setState({ tagCriteria: event.target.value });
  };

  render() {
    console.log("Rendering overview page");
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
              <div id="discussions-container-main">
                <DiscussionList
                    handleSelectDiscussion={this.props.handleSelectDiscussion}
                    discussionInfos={this.state.filteredDiscussions}
                    handleRedirect={this.handleRedirect}
                />
              </div>
              <PaddingItem/>
              <div id="discussions-container-side">
                <DiscussionListSmall
                  handleSelectDiscussion={this.props.handleSelectDiscussion}
                  discussionInfos={this.state.randomSelection}
                  handleRedirect={this.handleRedirect}
                  />
              </div>
              <PaddingItem/>
            </div>
          </div>
        </div>
    );
  }
}

export default injectIntl(DiscussionOverviewPage);
