import React from "react";
import "./discussion-list-small.styles.css";

import {DiscussionListItemSmall} from "../small/discussion-list-item-small/discussion-list-item-small.component";

export const DiscussionListSmall = ({discussionInfos, handleSelectDiscussion, handleRedirect}) => {
    return (
        <div className="discussion-list-small-container">
            {discussionInfos.map((d) => {
                return <DiscussionListItemSmall
                    discussionInfo={d}
                    handleSelectDiscussion={handleSelectDiscussion}
                    handleRedirect={handleRedirect}
                    key={d.id}
                />
            })}
        </div>
    );
};
