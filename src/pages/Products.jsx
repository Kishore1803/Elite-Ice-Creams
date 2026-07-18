import React, { useState } from "react";

import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

import CategoryFilter from "../components/Products/CategoryFilter";
import SearchBar from "../components/Products/SearchBar";
import SortDropDown from "../components/Products/SortDropDown";
import ProductGallery from "../components/Products/ProductGallery";
import FilterSidebar from "../components/Products/FilterSideBar";

import productsData from "../Data/products";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Flavors");
  const [sort, setSort] = useState("Popularity");

  const [price, setPrice] = useState(500);
  const [selectedDiet, setSelectedDiet] = useState([]);

  let filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Flavors" ||
      product.category === category;

    const matchesPrice = product.price <= price;

    const matchesDiet =
      selectedDiet.length === 0 ||
      selectedDiet.includes(product.dietary);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesDiet
    );
  });

  switch (sort) {
    case "Price: Low to High":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "Price: High to Low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "Newest":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;

    case "Rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return (
    <>
      <Navbar />

      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mt-5 mb-5">
            <h2 className="fw-bold display-5">
              Premium Ice Cream Collection
            </h2>

            <p className="text-muted">
              Fresh • Creamy • Delivered in Minutes
            </p>
          </div>

          <div className="row">

            {/* Sidebar */}

            <div className="col-lg-3 mb-4">

              <CategoryFilter
                onCategoryChange={setCategory}
              />

              <div className="mt-4">
                <FilterSidebar
                  price={price}
                  setPrice={setPrice}
                  selectedDiet={selectedDiet}
                  setSelectedDiet={setSelectedDiet}
                />
              </div>

            </div>

            {/* Products */}

            <div className="col-lg-9">

              <div className="row mb-4">

                <div className="col-md-8 mb-3 mb-md-0">
                  <SearchBar
                    search={search}
                    setSearch={setSearch}
                  />
                </div>

                <div className="col-md-4">
                  <SortDropDown
                    sort={sort}
                    setSort={setSort}
                  />
                </div>

              </div>

              {filteredProducts.length > 0 ? (
                <ProductGallery
                  products={filteredProducts}
                />
              ) : (
                <div className="text-center py-5">
                  <h3>No Products Found</h3>
                  <p className="text-muted">
                    Try changing the filters.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;