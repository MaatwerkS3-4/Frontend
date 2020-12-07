 import React from "react";
import "./discussion-info.styles.css";

export const DiscussionInfo = ({discussion}) =>{
    return(
        <div className="discussion-info-container">
            {/*Wrapped in span to make sure separators are sized properly*/}
            <div><span>{discussion.amountOfComments} Opmerkingen</span></div>
            <div><span>{discussion.amountOfParticipants} Deelnemers</span></div>
            <div><span>x seconden geleden</span></div>
        </div>
    )
}