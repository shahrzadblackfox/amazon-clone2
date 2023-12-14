import React, { FC } from 'react';
import { BsFillBagFill } from 'react-icons/bs';
import { Product } from './data';

interface ProductsProps {
    products: Product[]; 
  }
const Card: FC<Product> = ({ id,img, title, price, time }) => {
  return (
    <>
                 <div key={id} className="product-card">
                    <img src={img} alt={title} className="card-image" />
                    <div className="item-info">
                      <h4 className="title">{title}</h4>
                      <h4 className="price">{price}</h4>
                      <p className="time">{time}</p>
                    </div>
                  </div>
    </>
  );
};

export default Card;