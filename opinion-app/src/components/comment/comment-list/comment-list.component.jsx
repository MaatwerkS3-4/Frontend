import React from "react";
import "./comment-list.styles.css";
import CommentListItem from "./comment-list-item/comment-list-item.component";

export const CommentList = ({
  parent,
  comments,
  handleShowPostReply,
  handleUpvote,
}) => {
  console.log("parent", parent);
  return (
    <div className="comment-list-container">
      {comments.map((c) => (
        <CommentListItem
          key={c.id}
          content={c.content}
          replies={c.replies}
          parent={c}
          handleShowPostReply={handleShowPostReply}
          timeStamp={c.timeStamp}
          handleUpvote={handleUpvote}
          score={c.score}
          id={c.id}
          upvoted={c.upvotedByUser}
        />
      ))}
    </div>
  );
};
