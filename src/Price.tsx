import React, { FC, MouseEvent } from "react";


interface PriceProps {
  handleChange: (value: string | number) => void;
}

const Price: FC<PriceProps> = ({ handleChange }) => {
  const handleClick = (value: string | number) => (event: MouseEvent) => {
    event.preventDefault();
    handleChange(value);
  };

  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>



        <a href="#" className="sidebar-link" onClick={handleClick(50)}>
          <span className="checkmark"></span>$0 - $50
        </a>

        <a href="#" className="sidebar-link" onClick={handleClick(100)}>
          <span className="checkmark"></span>$50 - $100
        </a>

        <a href="#" className="sidebar-link" onClick={handleClick(150)}>
          <span className="checkmark"></span>$100 - $150
        </a>

        <a href="#" className="sidebar-link" onClick={handleClick(200)}>
          <span className="checkmark"></span>Over $150
        </a>
      </div>
    </>
  );
};

export default Price;