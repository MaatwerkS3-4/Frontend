import React from "react";
import "./discussion-list.styles.css";

import {DiscussionListItem} from "../discussion-list-item/discussion-list-item.component";

export const DiscussionList = ({discussions, handleSelectDiscussion, handleRedirect}) => {
    return (
        <div className="discussion-list-container">
            {discussions.map((d) => (
                <DiscussionListItem
                    discussion={d}
                    handleSelectDiscussion={handleSelectDiscussion}
                    handleRedirect={handleRedirect}
                />
            ))}
            {console.log(discussions)}
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
