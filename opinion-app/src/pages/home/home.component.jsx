import React, {Component} from "react";
import CreatePost from "../../components/create-discussion/create-discussion.component.jsx";
import DiscussionListComponent from "../discussions-list/discussion-list.component.jsx";
import "./home.styles.css";
import {SearchBox} from "../../components/search-box/search-box.component";

class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchField: ''
        };
    }

    handleSearchPress = (e) => {
        console.log(`handle search press button pressed: ${this.state.searchField}`);
    }

    handleInputChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        return (
            <div id="container">
                <h1>Wat moet ik vinden van...</h1>
                <SearchBox placeholder='Zoeken...'
                           handleInputChange={this.handleInputChange}
                           handleSearchPress={this.handleSearchPress}/>
            </div>
        );
    }
}

export default HomeComponent;
