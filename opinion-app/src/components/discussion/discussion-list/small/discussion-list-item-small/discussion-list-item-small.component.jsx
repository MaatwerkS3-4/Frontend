import React from "react";
import "./discussion-list-item-small.styles.css";

export const DiscussionListItemSmall = ({discussionInfo, handleSelectDiscussion, handleRedirect}) => {
    return (
        <div className="discussion-list-item-small-container"
             onClick={() => {
                 handleSelectDiscussion(discussionInfo.id);
                 handleRedirect(discussionInfo.id);
             }}
        >
            <div className="text-body-large">
                {discussionInfo.subject}
            </div>
            <div className="tag-container">
                {discussionInfo.tags.map(t => {
                    return <div className="tag">{t}</div>
                })}
            </div>
        </div>
    );
};
