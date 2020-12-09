import React from "react";
import "./comment-list.styles.css";
import {CommentListItem} from "./comment-list-item/comment-list-item.component";

export const CommentList = ({comments}) => {
    return (
        <div className="comment-list-container">
            {comments.map((c) => (
                <CommentListItem
                    key={c.id}
                    content={c.content}
                    username={c.poster.username}
                timeStamp={c.timeStamp}/>
            ))}
        </div>
    );
}