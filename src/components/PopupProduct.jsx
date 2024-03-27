import React from 'react';
import iphoneCase from '../images/case.png';

function PopupProduct() {
  return (
    <div className='popup popup_type_product '>
      <div className='overlay'></div>
      <form className='form-product'>
        <img className='form-product__image' src={iphoneCase} />
        <div className='form-product__data'>
          <h2 className='form-product__header'>
            case transparente para iphone
          </h2>
          <p className='form-product__caption'>Case acrílico para iphone</p>
          <h3 className='form-product__sub-header'>Modelo</h3>
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
