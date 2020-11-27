import React from "react";
import "./discussion-list-item.styles.css";

export const DiscussionListItem = ({ discussion }) => {
  return (
    <div className="post-list-item">
      <div className="main-info">
        <span className="subject">{discussion.subject}</span>{" "}
      </div>
      <div className="extra-info">
        <span className="extra-info-item">x Comments</span>
        <div className="seperator"></div>
        <span className="extra-info-item">x Deelnemers</span>
        <div className="seperator"></div>
        <span className="extra-info-item">x seconden geleden</span>
      </div>
    </div>
  );
};
