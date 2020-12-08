import React, {Component} from "react";
import "./discussion-overview.styles.css";

import {DiscussionList} from "../../components/discussion-list/discussion-list.component";

class DiscussionOverviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  handleRedirect = (id) =>{
    this.props.history.push(`/discussion/${id}`);
  }

  render() {
    console.log("rendering overview page")
    console.log(this.state)
    //Get data passed from previous page
    const {discussionInfos} = this.props;
    let criteria = (this.match.params.criteria === undefined) ? '' : this.match.params.criteria;


    const filteredDiscussionInfos = discussionInfos.filter(d =>
        d.subject.toLowerCase().includes(criteria.toLowerCase())
    );

    return (
      <div className="discussion-container">
        {console.log("Rendering overview...")}
        <DiscussionList handleSelectDiscussion={this.props.handleSelectDiscussion}
                        discussionInfos={filteredDiscussionInfos}
                        handleRedirect={this.handleRedirect}
        />
      </div>
    );
  }
}

export default DiscussionOverviewPage;
