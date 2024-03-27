import React from 'react';
import Card from './Card';
import texture from '../images/textura_IRNI.jpg';

function Products() {
  return (
    <section className='products'>
      <img className='decoration-band' src={texture} />
      <div className='products__container'>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Products;
