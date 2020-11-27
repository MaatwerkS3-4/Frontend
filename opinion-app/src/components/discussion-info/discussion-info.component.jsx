import React from "react";
import styles from"./discussion-info.module.css";

export const DiscussionInfo = ({subject, username}) =>{
    return (
        <div>
            <span className="subject">
                What do you think about {subject}?
            </span>
            <span className={styles.username}>
                {username}
            </span>
        </div>
    )
}