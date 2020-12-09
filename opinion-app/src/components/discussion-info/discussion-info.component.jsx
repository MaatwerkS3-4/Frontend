 import React from "react";
import "./discussion-info.styles.css";

export const DiscussionInfo = ({commentCount, participantCount}) =>{
    return(
        <div className="discussion-info-container">
            {/*Wrapped in second div to make sure separators are sized properly*/}
            <div><div><span>{commentCount}</span> Opmerkingen</div></div>
            <div><div><span>{participantCount}</span> Deelnemers</div></div>
            <div><div><span>x</span> seconden geleden</div></div>
        </div>
    )
}