import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="d-flex justify-content-center m-3">
      <input
        type="search"
        className="form-control ps-input"
        id="search-robots"
        placeholder="Search Robots..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
