import React from "react";

const FilterSidebar = ({ price, setPrice, selectedDiet, setSelectedDiet }) => {
  const diets = ["Sugar Free", "Vegan", "Gluten Free", "Low Fat"];

  const handleCheckbox = (diet) => {
    if (selectedDiet.includes(diet)) {
      setSelectedDiet(selectedDiet.filter((item) => item !== diet));
    } else {
      setSelectedDiet([...selectedDiet, diet]);
    }
  };

  return (
    <>
      {/* Price */}

      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Price Range</h5>

          <input
            type="range"
            className="form-range"
            min="0"
            max="500"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <div className="d-flex justify-content-between">
            <small>₹0</small>
            <small>₹{price}</small>
          </div>
        </div>
      </div>

      {/* Dietary */}

      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Dietary</h5>

          {diets.map((diet) => (
            <div className="form-check mb-2" key={diet}>
              <input
                className="form-check-input"
                type="checkbox"
                id={diet}
                checked={selectedDiet.includes(diet)}
                onChange={() => handleCheckbox(diet)}
              />

              <label className="form-check-label" htmlFor={diet}>
                {diet}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery */}

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

export default FilterSidebar;