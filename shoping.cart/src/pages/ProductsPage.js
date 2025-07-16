import React from 'react';
import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { id: 1, name: 'Earbuds', price: 25 },
  { id: 2, name: 'watch', price: 40 },
  { id: 3, name: 'Nike Shoes', price: 100 },
  { id: 4, name: 'Charger C-Type', price: 15 },
]; 

const ProductsPage = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
