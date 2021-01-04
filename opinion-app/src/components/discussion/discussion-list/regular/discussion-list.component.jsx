import React from "react";
import "./discussion-list.styles.css";

import {DiscussionListItem} from "./discussion-list-item/discussion-list-item.component";

export const DiscussionList = ({discussionInfos, handleSelectDiscussion, handleRedirect}) => {
    return (
        <div className="discussion-list-container">
            {discussionInfos.map((d) => {
                return <DiscussionListItem
                    discussionInfo={d}
                    handleSelectDiscussion={handleSelectDiscussion}
                    handleRedirect={handleRedirect}
                    key={d.id}
                />
            })}
        </div>
    );
};
