import React from "react";
import "./discussion-list.styles.css";

import {DiscussionListItem} from "../discussion-list-item/discussion-list-item.component";

export const DiscussionList = ({discussions, handleSelectDiscussion, handleRedirect}) => {
    return (
        <ul id="post-list">
            {discussions.map((d, index) => (
            <li key={index} onClick={() => {
                handleSelectDiscussion(d);
                handleRedirect(d.id);
            }}>
                <DiscussionListItem  discussion={d}/>
            </li>
            ))}
        </ul>
    )
}