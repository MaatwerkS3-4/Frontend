 import React from "react";
import "./discussion-info.styles.css";
 import {getTimeDifference} from "../../../services/date.service";

export const DiscussionInfo = ({commentCount, participantCount, timeStamp}) =>{
    return(
        <div className="discussion-info-container text-body-secondary">
            {/*Wrapped in second div to make sure separators are sized properly*/}
            <div><div><span className="text-attention">{getTimeDifference(new Date(timeStamp))}</span></div></div>
            <div><div>{commentCount} Opmerkingen</div></div>
            <div><div>{participantCount} Deelnemers</div></div>
        </div>
    )
}