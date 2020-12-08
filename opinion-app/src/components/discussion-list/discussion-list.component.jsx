import React from "react";
import "./discussion-list.styles.css";

import {DiscussionListItem} from "../discussion-list-item/discussion-list-item.component";

export const DiscussionList = ({discussionInfos, handleSelectDiscussion, handleRedirect}) => {
    return (
        <div className="discussion-list-container">
            {discussionInfos.map((d) => (
                <DiscussionListItem
                    discussionInfo={d}
                    handleSelectDiscussion={handleSelectDiscussion}
                    handleRedirect={handleRedirect}
                />
            ))}
        </div>
        // <ul id="post-list">
        //   {discussions.map((d, index) => (
        //     <li
        //       key={index}
        //       onClick={() => {
        //         handleSelectDiscussion(d);
        //         handleRedirect(d.id);
        //       }}
        //     >
        //       <DiscussionListItem discussion={d} />
        //     </li>
        //   ))}
        // </ul>
    );
};
