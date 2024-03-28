import React from 'react';
import Card from './Card';
import texture from '../images/textura_IRNI.jpg';
import { useState } from 'react';
function Products() {
  const [isPopupProductOpen, setIsPopupProductOpen] = useState(false);
  function handleOpenPopup() {
    setIsPopupProductOpen(true);
    console.log('abrir');
  }
  return (
    <section className='products'>
      <img className='decoration-band' src={texture} />
      <div className='products__container'>
        <Card onClick={handleOpenPopup} />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Products;
