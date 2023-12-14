
import React, { useState } from 'react';

interface FilterComponentProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
    price: string;
    type: string;
    color: string;
    category: string;
  }

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({
    price: '',
    type: '',
    color: '',
    category: '',
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleApplyFilters = () => {
    // Pass the selected filters to the parent component
    onFilterChange(filters);
  };

  return (
    <div>
      <h2>Filter Products</h2>
      <div>
        <label>
          Price:
          <input
            type="text"
            value={filters.price}
            onChange={(e) => handleFilterChange('price', e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <input
            type="text"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Color:
          <input
            type="text"
            value={filters.color}
            onChange={(e) => handleFilterChange('color', e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <input
            type="text"
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;
