import React from "react";
import "./discussion-info.styles.css";

export const DiscussionInfo = ({subject, username}) =>{
    return (
        <div>
            <span className="subject">
                What do you think about {subject}?
            </span>
            <span className="username">
                {username}
            </span>
        </div>
    )
}