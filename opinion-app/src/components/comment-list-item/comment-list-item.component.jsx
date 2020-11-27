import React from "react";
import "./comment-list-item.styles.css";

export const CommentListItem = ({ username, content }) => {
  return (
    <div>
      <span>{content}</span>{" "}
      <span className="comment-username">{username}</span>
    </div>
  );
};
