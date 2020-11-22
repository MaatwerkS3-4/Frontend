import React from "react";
import "./comment-list-item.styles.css";

export const CommentListItem = ({username, content}) => {
    return (
        <div>
            <span>
                {content}
            </span>{" "}
            <span className="username">{username}</span>
        </div>
    );
}