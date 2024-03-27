import React from 'react';
import item from '../images/snoopy-airpods.png';

function CartItem() {
  return (
    <li className='cartItem'>
      <div className='cart__image-container'>
        <img className='cartItem__image' src={item} />
      </div>
      <div className='cartItem__data'>
        <h3 className='cartItem__header'>Case transparente para iphone</h3>
        <p className='cartItem__price'>$299</p>
        <div className='cartItem__quantityBox'></div>
      </div>
    </li>
  );
}

export default CartItem;
