import React from 'react';
import Card from './Card';

function Products() {
  return (
    <section className='products'>
      <div className='products__container'>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Products;
