import React from "react";
import "./comment-list.styles.css";
import {CommentListItem} from "../comment-list-item/comment-list-item.component";

export const CommentList = ({comments}) => {
    return (
        <div className="comment-list-container">
            {comments.map((c) => (
                <CommentListItem content={c.content} username={c.user.username} />
            ))}
        </div>
    );
}