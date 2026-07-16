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
    "Sugar Free",
  ];

  const [activeCategory, setActiveCategory] = useState("All Flavors");

  const handleCategory = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <>
      {/* Categories */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-4">Categories</h5>

          <div className="list-group list-group-flush">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action rounded-3 mb-2 border-0 ${
                  activeCategory === category ? "bg-danger text-white" : ""
                }`}
                onClick={() => handleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price Filter */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Price Range</h5>

          <input type="range" className="form-range" min="0" max="500" />

          <div className="d-flex justify-content-between">
            <small>₹0</small>
            <small>₹500</small>
          </div>
        </div>
      </div>

      {/* Dietary Options */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Dietary</h5>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="sugar" />
            <label className="form-check-label" htmlFor="sugar">
              Sugar Free
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="vegan" />
            <label className="form-check-label" htmlFor="vegan">
              Vegan
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gluten" />
            <label className="form-check-label" htmlFor="gluten">
              Gluten Free
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="lowfat" />
            <label className="form-check-label" htmlFor="lowfat">
              Low Fat
            </label>
          </div>
        </div>
      </div>

      {/* Delivery Card */}
      <div className="card bg-danger text-white border-0 rounded-4 shadow">
        <div className="card-body text-center py-4">
          <h4 className="fw-bold">🚚 Free Delivery</h4>

          <p className="mb-0">
            On orders above <strong>₹299</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;