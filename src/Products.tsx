import React, { useState } from "react";
import productData, { Product } from "./data";
import "./Products.css";


interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const [products, setProducts] = useState<Product[]>(productData);

  return (
    <div>
      <div className="headFilter">
        {" "}
        
          <div >
            <span className="headFilter-item">1-24 of 100 results</span>
          </div>
          <div  className="headFilter-item" >
            <button>Sort by: featured</button>
          </div>
      
      </div>

      <section>
        <div className="row">
            <div className="head-product">Results</div>
            
            </div>

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
  );
};

export default Products;
