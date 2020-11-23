import React from "react";
import "./comment-list.styles.css";
import {CommentListItem} from "../comment-list-item/comment-list-item.component";

export const CommentList = ({comments}) => {
    return (
        <ul id="post-list">
            {comments.map((c, index) => (
                <li key={index}>
                    <CommentListItem content={c.content} username={c.user.username} />
                </li>
            ))}
        </ul>
    );
}