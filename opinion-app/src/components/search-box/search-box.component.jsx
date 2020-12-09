import React from "react";
import "./search-box.styles.css";
import { FaSearch } from "react-icons/fa";
import {TextBox} from "../input/text-box/text-box.component";

export const SearchBox = ({
  placeholder,
  handleInputChange,
  handleSearchPress,
}) => {
  return (
    <div className="search-container">
        <TextBox
            placeholder={placeholder}
            handleInputChange={handleInputChange}
        />
        <button onClick={handleSearchPress} className="center">
            <FaSearch className="search-button-icon"/>
        </button>
    </div>
  );
};
