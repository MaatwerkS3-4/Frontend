import React from "react";
import "./discussion-list-item.styles.css";
import { DiscussionInfo } from "../../discussion-info/discussion-info.component";
import { handleDiscussionUpvote } from "../../../../services/api.service";

export const DiscussionListItem = ({
  discussionInfo,
  handleSelectDiscussion,
  handleRedirect,
  score,
  upvoted,
}) => {
  return (
    <div
      className="discussion-list-item-container"
      onClick={() => {
        handleSelectDiscussion(discussionInfo.id);
        handleRedirect(discussionInfo.id);
      }}
    >
      <div className="text-body-large">{discussionInfo.subject}</div>
      <DiscussionInfo
        commentCount={discussionInfo.numberOfComments}
        participantCount={discussionInfo.numberOfParticipants}
        timeStamp={discussionInfo.timeStamp}
        tags={discussionInfo.tags}
        handleUpvote={() => {
          handleDiscussionUpvote(discussionInfo.id);
        }}
        score={score}
        upvoted={upvoted}
      />
    </div>
  );
};
