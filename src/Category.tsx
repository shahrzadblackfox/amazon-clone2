import React, { FC, ChangeEvent } from 'react';
import "./Category.css";

import Input from './Input';

interface CategoryProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Category: FC<CategoryProps> = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
                  handleChange={handleChange}
                  value="sneakers"
                  title="Sneakers"
                  name="test" color={''}        />
        <Input
                  handleChange={handleChange}
                  value="flats"
                  title="Flats"
                  name="test" color={''}        />
        <Input
                  handleChange={handleChange}
                  value="sandals"
                  title="Sandals"
                  name="test" color={''}        />
        <Input
                  handleChange={handleChange}
                  value="heels"
                  title="Heels"
                  name="test" color={''}        />
      </div>
    </div>
  );
}

export default Category;