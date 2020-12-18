import React from "react";
import "./comment-list-item.styles.css";
import { getTimeDifference } from "../../../../services/date.service";
import { CommentList } from "../comment-list.component";
import { ButtonRegular } from "../../../input/button/button-regular/button-regular.component";
import Vote from "./vote.component";

export const Demo = ({
  username,
  content,
  timeStamp,
  replies,
  parent,
  handleShowPostReply,
}) => {
  return (
    <div className="comment-list-item-container">
      <div className="comment-content text-body">{content}</div>
      <div className="comment-list-item-info-container text-body-secondary">
        <div className="icon-container-1">
          <Vote />
        </div>
        <div>
          <div>{getTimeDifference(new Date(timeStamp))}</div>
        </div>
        <div className="button-reply">
          <ButtonRegular
            text="Antwoorden"
            handleOnClick={() => handleShowPostReply(parent)}
          />
        </div>
      </div>
      <CommentList
        comments={replies}
        parent={parent}
        handleShowPostReply={handleShowPostReply}
      />
    </div>
  );
};
