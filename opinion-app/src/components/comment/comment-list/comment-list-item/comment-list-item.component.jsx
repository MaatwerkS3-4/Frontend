import React from "react";
import "./comment-list-item.styles.css";
import {getTimeDifference} from "../../../../services/date.service";

export const CommentListItem = ({username, content, timeStamp}) => {
    return (
        <div className="comment-list-item-container">
            <div className="comment-content text-body">{content}</div>
            <div className="comment-list-item-info-container text-body-secondary">
                <div><div className=" text-attention">{username}</div></div>
                <div><div>{getTimeDifference(new Date(timeStamp))}</div></div>
            </div>
        </div>
    );
};
