import React, { Component } from "react";
import "./home.styles.css";
import { SearchBox } from "../../components/search-box/search-box.component";
import { TextArea } from "../../components/input/text-area/text-area.component";
import { FormattedMessage, injectIntl } from "react-intl";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
    };
  }

  handleSearchPress = (e) => {
    console.log(
      `handle search press button pressed: ${this.state.searchField}`
    );
    this.props.history.push(`/discussions/${this.state.searchField}`);
  };

  handleSearchFieldChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { intl } = this.props;
    console.log("Rendering Homepage...");
    return (
      <div id="home-container">
        <div id="home-title" className="text-title">
          <FormattedMessage id="search.title" />
        </div>
        <SearchBox
          placeholder={intl.formatMessage({ id: "search" })}
          handleInputChange={this.handleSearchFieldChanged}
          handleSearchPress={this.handleSearchPress}
        />
      </div>
    );
  }
}

export default injectIntl(HomePage);
