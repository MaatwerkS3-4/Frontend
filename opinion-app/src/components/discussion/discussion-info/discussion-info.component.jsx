import React from "react";
import "./discussion-info.styles.css";
import { getTimeDifference } from "../../../services/date.service";
import { FormattedMessage } from "react-intl";

export const DiscussionInfo = ({
  commentCount,
  participantCount,
  timeStamp,
  tags,
}) => {
  return (
    <div className="discussion-info-container text-body-secondary">
      {/*Wrapped in second div to make sure separators are sized properly*/}
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
        <div>{participantCount} Deelnemers</div>
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
