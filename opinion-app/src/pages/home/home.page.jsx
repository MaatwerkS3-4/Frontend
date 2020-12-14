import React, { Component } from "react";
import "./home.styles.css";
import { SearchBox } from "../../components/search-box/search-box.component";
import {TextArea} from "../../components/input/text-area/text-area.component";

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

  handleSearchFieldChanged = (event) =>{
      this.setState({searchField: event.target.value});
  }

  render() {
    console.log("Rendering Homepage...")
    return (
<<<<<<< HEAD
      <div id="search-container">
        <span className="title search-title">Wat moet ik vinden van...</span>
        <SearchBox
          placeholder="Zoeken..."
          handleInputChange={this.handleInputChange}
          handleSearchPress={this.handleSearchPress}
          type="search"
        />
      </div>
=======
        <div id="home-container">
            <div id="home-title" className="text-title">Wat moet ik vinden van...</div>
            <SearchBox
                placeholder="Zoeken..."
                handleInputChange={this.handleSearchFieldChanged}
                handleSearchPress={this.handleSearchPress}
            />
        </div>
>>>>>>> master
    );
  }
}

export default HomePage;
