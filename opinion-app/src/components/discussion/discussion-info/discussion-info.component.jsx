 import React from "react";
import "./discussion-info.styles.css";

export const DiscussionInfo = ({commentCount, participantCount}) =>{
    return(
        <div className="discussion-info-container text-body-secondary">
            {/*Wrapped in second div to make sure separators are sized properly*/}
            <div><div><span className="text-attention">{commentCount}</span> Opmerkingen</div></div>
            <div><div><span className="text-attention">{participantCount}</span> Deelnemers</div></div>
            <div><div><span className="text-attention">x</span> seconden geleden</div></div>
        </div>
    )
}