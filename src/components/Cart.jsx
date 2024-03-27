import React from 'react';
import texture from '../images/textura_IRNI.jpg';
import CartItem from './CartItem';

function Cart() {
  return (
    <section className='cart'>
      <img className='decoration-band' src={texture} />
      <div className='cart__container'>
        <h2 className='cart__header'>Tus compras</h2>
        <ul className='cart__added-items'>
          <CartItem />
        </ul>
        <div className='cart__total-container'>
          <div className='cart__total-data'>
            <h3 className='cart__total-header'>Total</h3>
            <p className='cart__amount'>$299</p>
          </div>

          <button className='button button_shop'>
            <h3 className='button__text'>Ir al pago</h3>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
