import React from "react";
import "./discussion-list-item.styles.css";

export const DiscussionListItem = ({discussion, handleSelectDiscussion, handleRedirect}) => {
    return (

        <div className="discussion-list-item-container" onClick={() => {
            handleSelectDiscussion(discussion);
            handleRedirect(discussion.id);
        }}>
            <div className="info-main">
                {discussion.subject}
            </div>
            <div className="info-extra">
                <div>{discussion.amountOfComments} Opmerkingen</div>
                <div>{discussion.amountOfParticipants} Deelnemers</div>
                <div>x seconden geleden</div>
            </div>
        </div>
    );
};
