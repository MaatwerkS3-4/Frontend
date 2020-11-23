import React from "react";
import "./text-box.styles.css";

export const TextBox = ({tag, placeholder, handleInputChange}) => {
    return(
        <div>
            <p>{tag}</p>
            <input type='search'
                   className='search'
                   onChange={handleInputChange}
                   placeholder={placeholder}
            />
        </div>
    );
};