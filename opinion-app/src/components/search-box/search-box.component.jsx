import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleInputChange, handleSearchPress}) =>{
    return (
        <div>
            <input type='search'
                   className='search'
                   onChange={handleInputChange}
                   placeholder={placeholder}
            />
            <button onClick={handleSearchPress}>Search</button>
        </div>
    );
};