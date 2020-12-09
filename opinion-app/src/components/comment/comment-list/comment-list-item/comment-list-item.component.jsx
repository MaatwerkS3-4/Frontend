import React from "react";
import "./comment-list-item.styles.css";
import {getTimeDifference} from "../../../../services/date.service";

export const CommentListItem = ({username, content, timeStamp}) => {
    return (
        <div className="comment-list-item-container">
            <div className="comment-content text-body">{content}</div>
            <div className="comment-list-item-info-container">
                <div><div className="text-body-large text-attention">{username}</div></div>
                <div><div className="text-body">{getTimeDifference(new Date(timeStamp))}</div></div>
            </div>
        </div>
    );
};
