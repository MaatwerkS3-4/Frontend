import React from "react";
import "./search-box.styles.css";
import { FaSearch } from "react-icons/fa";

export const SearchBox = ({
  placeholder,
  handleInputChange,
  handleSearchPress,
}) => {
  return (
    <div className="search-container">
      <input
        type="search"
        className="search"
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button onClick={handleSearchPress} className="search-button">
        <FaSearch className="search-button-icon"/>
      </button>
    </div>
  );
};
