 import React from "react";
import "./discussion-info.styles.css";

export const DiscussionInfo = ({discussion}) =>{
    return(
        <div className="discussion-info-container">
            <div>{discussion.amountOfComments} Opmerkingen</div>
            <div>{discussion.amountOfParticipants} Deelnemers</div>
            <div>x seconden geleden</div>
        </div>
    )
}