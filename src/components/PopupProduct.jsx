import React from 'react';
import iphoneCase from '../images/case.png';

function PopupProduct() {
  return (
    <div className='popup popup_type_product '>
      <div className='overlay'></div>
      <form className=' form form_type_product'>
        <div className='form-product__image-container'>
          <img className='form-product__image' src={iphoneCase} />
        </div>

        <div className='form-product__data'>
          <h2 className='form-product__header'>
            case transparente para iphone
          </h2>
          <p className='form-product__caption'>Case acrílico para iphone</p>
          <h3 className='form-product__sub-header'>Modelo</h3>
          <div className='form-product__sizes-container'>
            <ul className='form-product__sizes'>
              <li className='form-product__size'> iphone 11</li>
              <li className='form-product__size'> iphone 12</li>
              <li className='form-product__size'> iphone 11 pro</li>
              <li className='form-product__size'> iphone 12 pro</li>
              <li className='form-product__size'> iphone 11 pro</li>
              <li className='form-product__size'> iphone 12 pro</li>
            </ul>
          </div>
          <h4 className='form-product__price'>$299</h4>
          <p className='form-product__disclairmer'>
            Los gastos de envío se calculan en la pantalla de pago
          </p>
          <button className='button button_shop'>
            <h3 className='button__text'> agregar a carrito </h3>
          </button>
        </div>
      </form>
    </div>
  );
}

export default PopupProduct;
