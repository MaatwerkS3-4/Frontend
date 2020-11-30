import React from "react";
import "./discussion-list-item.styles.css";
import {DiscussionInfo} from "../discussion-info/discussion-info.component";

export const DiscussionListItem = ({discussion, handleSelectDiscussion, handleRedirect}) => {
    return (

        <div className="discussion-list-item-container" onClick={() => {
            handleSelectDiscussion(discussion);
            handleRedirect(discussion.id);
        }}>
            <div className="info-main">
                {discussion.subject}
            </div>
            <DiscussionInfo discussion={discussion}/>
        </div>
    );
};
