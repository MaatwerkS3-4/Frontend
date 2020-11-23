import React from "react";
import "./discussion-list-item.styles.css";

export const DiscussionListItem = ({discussion}) => {
    return (
        <div className="post-list-item" >
            <span className="subject">{discussion.subject}</span>{" "}
            <span className="username">{discussion.user.username}</span>
        </div>
    )
}