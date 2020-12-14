import React, {Component} from "react";
import "./discussion-overview.styles.css";

import {DiscussionList} from "../../components/discussion/discussion-list/discussion-list.component";

class DiscussionOverviewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    handleRedirect = (id) => {
        this.props.history.push(`/discussion/${id}`);
    }

    render() {
        console.log("Rendering overview page")

        //Get data passed from previous page
        const {discussionInfos} = this.props;
        let criteria = this.props.match.params.criteria;
        if (criteria === undefined) criteria = "";

        return (
            <div className="discussion-container">
                <div className="discussion-overview-title text-title">
                    {(criteria === "") ?
                        <div>Alle discussies</div> :
                        <div>Discussies gefilterd voor: <span className="text-attention">{criteria}</span></div>}
                </div>
                <DiscussionList handleSelectDiscussion={this.props.handleSelectDiscussion}
                                discussionInfos={discussionInfos.filter(d =>
                                    d.subject.toLowerCase().includes(criteria.toLowerCase()))}
                                handleRedirect={this.handleRedirect}
                />
            </div>
        );
    }
}

export default DiscussionOverviewPage;
