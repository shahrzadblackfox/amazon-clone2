// ProductsContainer.tsx
import React, { useState } from 'react';
import FilterComponent from './FilterComponent';
import Products from './Products';
import productData, { Product as LocalProduct } from './data';

interface Filters {
  price: string;
  type: string;
  color: string;
  category: string;
}

const ProductsContainer: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<LocalProduct[]>(productData);

  const handleFilterChange = (filters: Filters) => {
    const updatedProducts = filterProducts(productData, filters);
    setFilteredProducts(updatedProducts);
  };

  // Your filter function
  const filterProducts = (products: LocalProduct[], filters: Filters): LocalProduct[] => {
    return products.filter((product) => {
      const { price, type, color, category } = filters;
      const priceMatch = price === '' || product.price.toString() === price;
      const typeMatch = type === '' || product.type.toLowerCase() === type.toLowerCase();
      const colorMatch = color === '' || product.color.toLowerCase() === color.toLowerCase();
      const categoryMatch = category === '' || product.category.toLowerCase() === category.toLowerCase();
      return priceMatch && typeMatch && colorMatch && categoryMatch;
    });
  };

  return (
    <div>
      <FilterComponent onFilterChange={handleFilterChange} />
      <Products products={filteredProducts} />
    </div>
  );
};

export default ProductsContainer;
