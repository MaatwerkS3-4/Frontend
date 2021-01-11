import React from "react";
import "./discussion-info.styles.css";
import { getTimeDifference } from "../../../services/date.service";
import { FormattedMessage } from "react-intl";
import Score from "../../score/score.component";

export const DiscussionInfo = ({
  commentCount,
  participantCount,
  timeStamp,
  tags,
  score,
  handleUpvote,
  upvoted,
}) => {
  return (
    <div className="discussion-info-container text-body-secondary">
      {/*Wrapped in second div to make sure separators are sized properly*/}
      <div>
        <Score score={score} handleUpvote={handleUpvote} upvoted={upvoted} />
      </div>
      <div>
        <div>{getTimeDifference(new Date(timeStamp))}</div>
      </div>
      <div>
        <div>
          {commentCount}{" "}
          <FormattedMessage id="discussion.info.comments"></FormattedMessage>
        </div>
      </div>
      <div>
        <div>
          {participantCount}{" "}
          <FormattedMessage id="discussion.info.participants"></FormattedMessage>
        </div>
      </div>
      <div>
        <div className="tag-container">
          {tags.map((c, index) => {
            return (
              <div className="tag" key={index}>
                {c}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
