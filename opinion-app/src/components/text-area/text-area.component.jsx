import React from "react";
import "./text-area.styles.css";

export const TextArea = ({tag, placeholder, handleInputChange}) =>{
    return(
        <div className="textarea-container">
            <div className="textarea-tag">{tag}</div>
            <textarea className="textarea-field"
                      onChange={handleInputChange}
                      placeholder={placeholder}
                      rows={1}
                      />
        </div>
    )
}