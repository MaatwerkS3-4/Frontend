import React from "react";
import "./discussion-list-item.styles.css";
import {DiscussionInfo} from "../discussion-info/discussion-info.component";

export const DiscussionListItem = ({discussionInfo, handleSelectDiscussion, handleRedirect}) => {
    return (

        <div className="discussion-list-item-container" onClick={() => {
            handleSelectDiscussion(discussionInfo);
            handleRedirect(discussionInfo.id);
        }}>
            <div className="info-main">
                {discussionInfo.subject}
            </div>
            <DiscussionInfo discussion={discussionInfo}/>
        </div>
    );
};
