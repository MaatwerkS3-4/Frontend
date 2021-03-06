import React, {Component} from "react";
import "./home.styles.css";
import {SearchBox} from "../../components/search-box/search-box.component";
import {FormattedMessage, injectIntl} from "react-intl";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
    };
  }

  handleSearchPress = () => {
    this.props.history.push(`/discussions/${this.state.searchField}`);
  };

  handleSearchFieldChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  handleRedirect = (id) => {
    this.props.handleSelectDiscussion(id);
    this.props.history.push(`/discussion/${id}`);
  };

  handleFilterRecommendations = () => {
    const filteredDiscussions = [];
    if (this.state.searchField === "") return undefined;

    this.props.discussionInfos.forEach((d) => {
      if (filteredDiscussions.length >= 10) {
        return;
      }

      if (
        d.subject.toLowerCase().includes(this.state.searchField.toLowerCase())
      ) {
        filteredDiscussions.push(d);
      }
    });

    if (filteredDiscussions.length < 1) return undefined;
    return filteredDiscussions;
  };

  render() {
    const { intl } = this.props;
    return (
        <div id="home-container">
          <div id="searchbox">
            <div id="home-title" className="text-title">
              <FormattedMessage id="search.title" />
            </div>
            <SearchBox
                placeholder={intl.formatMessage({ id: "search" })}
                handleInputChange={this.handleSearchFieldChanged}
                handleSearchPress={this.handleSearchPress}
                recommendations={this.handleFilterRecommendations()}
                handleRedirect={this.handleRedirect}
            />
          </div>
          <div id="header-offset"/>
        </div>
    );
  }
}

export default injectIntl(HomePage);
