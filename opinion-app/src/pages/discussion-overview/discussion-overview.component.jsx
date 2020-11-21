import React, { Component } from "react";
import { getAllPosts } from "../../services/api-service.js";
import "./discussion-overview.styles.css";

import {DiscussionList} from "../../components/discussion-list/discussion-list.component";

class DiscussionOverviewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      discussions: [],
      criteria: props.match.params.criteria
    };
  }

  componentDidMount() {
    getAllPosts().then((response) => {
      if (response !== undefined && response.data != null) {
        console.log(response.data);
        this.setState({ discussions: response.data });
      }
    });
  }

  handleSelectedItem = (id) =>{
    console.log(`Clicked item with id ${id}`);
    this.props.history.push(`/discussion/${id}`);
  }

  render() {
    //filter discussion with search criteria
    let {discussions, criteria} = this.state;
    if(criteria === undefined){
      criteria = '';
    }
    const filteredDiscussions = discussions.filter(d =>
        d.subject.toLowerCase().includes(criteria.toLowerCase())
    );

    return (
      <div id="container">
        <DiscussionList handleItemSelected={this.handleSelectedItem}
                        discussions={filteredDiscussions}/>
      </div>
    );
  }
}

export default DiscussionOverviewComponent;
