import React, { useState } from "react";

const CategoryFilter = ({ onCategoryChange }) => {
  const categories = [
    "All Flavors",
    "Ice Cream Cups",
    "Ice Cream Cones",
    "Family Packs",
    "Sundaes",
    "Ice Cream Cakes",
    "Kulfi",
  ];

  const [activeCategory, setActiveCategory] = useState("All Flavors");

  const handleCategory = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body">
        <h4 className="fw-bold mb-4">Categories</h4>

        <div className="list-group list-group-flush">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`list-group-item list-group-item-action rounded-3 mb-2 border-0 ${
                activeCategory === category
                  ? "bg-danger text-white"
                  : "bg-light"
              }`}
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;