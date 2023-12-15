import React, { useState } from "react";
import productData, { Product } from "./data";

import "./Products.css";
import FilterComponent from "./FilterComponent";
import ProductsContainer from "./ProductsContainer";
import Sidebar from "./Sidebar";

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = () => {
  const [products, setProducts] = useState<Product[]>(productData);
  const category = products.length > 0 ? products[0].category : "";
  const [selectedPrice, setSelectedPrice] = useState<string | null>("0");
  const [selectedSort, setSelectedSort] = useState<string>("featured");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value);
  };

  const handlePriceFilter = (price: string) => {
    setSelectedPrice(price);
  };
  
  const filteredProducts = selectedPrice === "0"
    ? products
    : products.filter((product) => {
        const productPrice = product.price;
        switch (selectedPrice) {


          case "1":
            return productPrice < 50;
          case "2":
            return productPrice >= 50 && productPrice <= 100;
          case "3":
            return productPrice >= 100 && productPrice <= 150;
          case "4":
            return productPrice >= 150 && productPrice <= 200;
          case "5":
            return productPrice >= 200 && productPrice <= 250;
          default:
            return false;
        }
      })
  ;

  return (
    <div className="container-fluid">
      <div className="headFilter">
        {" "}
        <div>
          <span className="headFilter-item">1-24 of 100 results</span>
        </div>
        <div className="headFilter-item">
          <label className="sort-option">Sort by:  </label>
          <select value={selectedSort} onChange={handleSortChange}>
            <option value="featured">Featured</option>
            <option value="featured">Lowe Price</option>
            <option value="featured">High Price</option>
            
          </select>

        </div>
      </div>
      <div className="container-fluid">
        <div className="head-product">Results</div>
        <div className="product-filter-section">
          <div className="col-md-2 side-filter">
            <h3>{category}</h3>
            <div className="price-list">

              <a href="#" onClick={() => handlePriceFilter("1")}>under $50</a>
              <a href="#" onClick={() => handlePriceFilter("2")}>$50-$100</a>
              <a href="#" onClick={() => handlePriceFilter("3")}>$100-$150</a>
              <a href="#"onClick={() => handlePriceFilter("4")}>$150-$200</a>
              <a href="#" onClick={() => handlePriceFilter("5")}>$200-$250</a>

            </div>
          </div>
          <div className="col-md-8">
            <section>
              <div className="row product-list">
                {filteredProducts.map((item) => {
                  const { id, title, price, img, time } = item;
                  return (
                    <div key={id} className="product-card">
                      <img src={img} alt={title} className="card-image" />
                      <div className="item-info">
                        <h4 className="title">{title}</h4>
                        <h4 className="price">${price}</h4>
                        <p className="time">{time}</p>
                      </div>
                    </div>
                  );
                })}
                {filteredProducts.length === 0 && (
            <p>No products in this price range</p>
          )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
