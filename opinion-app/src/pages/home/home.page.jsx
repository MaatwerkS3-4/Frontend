import React, { Component } from "react";
import "./home.styles.css";
import { SearchBox } from "../../components/search-box/search-box.component";

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

  handleInputChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
        <div className="home-container">
          <div className="home-title">Wat moet ik vinden van...</div>
          <SearchBox
              placeholder="Zoeken..."
              handleInputChange={this.handleInputChange}
              handleSearchPress={this.handleSearchPress}
          />
        </div>
    );
  }
}

export default HomePage;
