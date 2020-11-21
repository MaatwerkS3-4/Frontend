import React from "react";
import "./discussion-list-item.styles.css";

export const DiscussionListItem = ({id, subject, username, handleItemSelected}) => {
    return (
        <div className="post-list-item" onClick={() => handleItemSelected(id)}>
            <span className="subject">{subject}</span>{" "}
            <span className="username">{username}</span>
        </div>
    )
}