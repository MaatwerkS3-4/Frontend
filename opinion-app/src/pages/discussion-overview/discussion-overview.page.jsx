import React, {Component} from "react";
import "./discussion-overview.styles.css";

import {DiscussionList} from "../../components/discussion-list/discussion-list.component";

class DiscussionOverviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: props.match.params.criteria,
      discussions: props.discussions,
    };
  };

  handleRedirect = (id) =>{
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
      <div className="discussion-container">
        {console.log("Rendering overview...")}
        <DiscussionList handleSelectDiscussion={this.props.handleSelectDiscussion}
                        discussions={filteredDiscussions}
                        handleRedirect={this.handleRedirect}
        />
      </div>
    );
  }
}

export default DiscussionOverviewPage;
