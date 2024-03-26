import React from 'react';
import texture from '../images/textura_IRNI.jpg';
import mug from '../images/overthinker.jpg';

function HotToday() {
  return (
    <section className='hotToday'>
      <img className='decoration-band' src={texture} />
      <div className='hotToday__content'>
        <div className='hotToday__images'>
          <div className='hotToday__image-frame'>
            <div className='hotToday__image-container'>
              <img className='hotToday__image' src={mug} />
            </div>
          </div>
          <button className='button button_shop'>
            <h3 className='button__text'> agregar a carrito </h3>
          </button>
        </div>
        <div className='hotToday__data'>
          <h2 className='hotToday__header'>Presentando el Producto del Mes</h2>
          <h3 className='hotToday__text'>
            ¡Los imprescindibles de la temporada están aquí! Explora lo más
            destacado de hoy en
            <span className='hotToday__highlight'>I Really Need It</span>
          </h3>
          <button className='button button_products'>
            <h3 className='button__text'>más productos </h3>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HotToday;
