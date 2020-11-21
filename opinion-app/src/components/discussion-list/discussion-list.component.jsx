import React from "react";
import "./discussion-list.styles.css";

import {DiscussionListItem} from "../discussion-list-item/discussion-list-item.component";

export const DiscussionList = ({discussions, handleItemSelected}) => {
    return (
        <ul id="post-list">
            {discussions.map((d, index) => (
            <li key={index}>
                <DiscussionListItem id={d.id}
                                    subject={d.subject}
                                    username={d.user.username}
                                    handleItemSelected={handleItemSelected}/>
            </li>
            ))}
        </ul>
    )
}