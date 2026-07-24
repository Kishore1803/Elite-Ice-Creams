import React from "react";

const SortDropDown = ({ sort, setSort }) => {
  return (
    <div className="d-flex justify-content-end">
      <select
        className="form-select rounded-pill shadow-sm"
        style={{ maxWidth: "auto" }}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="Popularity">Sort by: Popularity</option>
        <option value="Newest">Newest</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
        <option value="Rating">Highest Rating</option>
        <option value="Discount">Best Discount</option>
      </select>
    </div>
  );
};

export default SortDropDown;