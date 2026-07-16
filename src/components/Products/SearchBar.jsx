import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="input-group shadow-sm">
      <span className="input-group-text bg-white border-end-0 rounded-start-pill">
        <FaSearch className="text-secondary" />
      </span>

      <input
        type="text"
        className="form-control border-start-0 border-end-0 py-2"
        placeholder="Search for ice creams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button
          className="btn btn-outline-secondary rounded-end-pill"
          onClick={() => setSearch("")}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;