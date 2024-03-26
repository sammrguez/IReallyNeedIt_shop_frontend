import React from 'react';
import texture from '../images/textura_IRNI.jpg';

function HotToday() {
  return (
    <section className='hotToday'>
      <img className='hotToday__decoration-band' src={texture} />
      <div className='hotToday__images'>
        <div className='hotToday__image-frame'></div>
        <div className='hotToday__image-container'>
          <img className='hotToday__image' />
        </div>
      </div>
      <div className='hotToday__data'></div>
    </section>
  );
}

export default HotToday;
