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



  return (
    <div className="container-fluid">
      <div className="headFilter">
        {" "}
        <div>
          <span className="headFilter-item">1-24 of 100 results</span>
        </div>
        <div className="headFilter-item">
          <button>Sort by: featured</button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-md-2 side-filter" >

       


        </div>
        <div className="col-md-8">
          <section>
            <div className="head-product">Results</div>

            <div className="row product-list">
              {products.map((item) => {
                const { id, title, price, img, time } = item;
                return (
                  <div key={id} className="product-card">
                    <img src={img} alt={title} className="card-image" />
                    <div className="item-info">
                      <h4 className="title">{title}</h4>
                      <h4 className="price">{price}</h4>
                      <p className="time">{time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
