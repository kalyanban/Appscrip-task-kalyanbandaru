import React, { useState, useEffect } from "react";
import axios from "axios";

import { GoHeart } from "react-icons/go";

import "./index.css"

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="products-container">
        <div className="filters-container">
            <h4 className="filter">FILTERS</h4>
            <select value={category} onChange={handleCategoryChange} className="filter-select">
                <option value="">All Categories</option>
                {[...new Set(products.map((product) => product.category))].map(
                (category) => ( 
                    <option key={category} value={category}>
                    {category}
                    </option>
                )
                )}
            </select>
        </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <>
            <div key={product.id} className="product">
                <img src={product.image} alt={product.title} className="product-image"/>
                <div className="product-info">
                    <div className="info">
                        <h3>{product.title}</h3>
                        <p className="signin">
                            Sign in Or Create an account to see pricing
                        </p>
                    </div>
                    <GoHeart />
                </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default ProductsSection
