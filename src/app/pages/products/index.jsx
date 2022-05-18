import React from 'react';
import Seo from '../../seo';
import products from '../../data/products.json';
import Product from './product';
export default function ProductsPage({}) {
  return (
    <>
      <Seo title={'Our Products'} />
      <h1>Stuff We Sell</h1>
      <div className='products'>
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </>
  );
}
