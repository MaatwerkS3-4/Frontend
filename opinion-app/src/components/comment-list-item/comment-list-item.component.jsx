import React from "react";
import "./comment-list-item.styles.css";

export const CommentListItem = ({ username, content }) => {
  return (
    <div>
      <div className="comment-content">{content}</div>
      <div className="comment-username">{username}</div>
    </div>
  );
};
