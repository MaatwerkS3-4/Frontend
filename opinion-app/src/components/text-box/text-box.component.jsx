import React from "react";
import "./text-box.styles.css";

export const TextBox = ({tag, placeholder, handleInputChange}) => {
    return(
        <div className="textbox-container">
            <div className="textbox-tag">{tag}</div>
            <input type='search'
                   className='textbox-field'
                   onChange={handleInputChange}
                   placeholder={placeholder}
            />
        </div>
    );
};