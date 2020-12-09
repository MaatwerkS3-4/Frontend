import React from "react";
import "./comment-list-item.styles.css";

export const CommentListItem = ({ username, content }) => {
  return (
    <div className="comment-list-item-container">
      <div className="comment-content text-body">{content}</div>
      <div className="comment-username text-body-large">{username}</div>
    </div>
  );
};
