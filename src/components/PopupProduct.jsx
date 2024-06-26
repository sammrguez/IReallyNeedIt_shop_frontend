import React from 'react';

import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CardPopup from './CardPopup';

function PopupProduct({ selectedCard, name, onClose, onAddProductClick }) {
  useEffect(() => {
    selectedCard
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [selectedCard]);

  return (
    <div
      className={`popup popup_type_${name} ${
        selectedCard ? 'popup_opened' : ''
      } `}
    >
      <div className='overlay' onClick={onClose}></div>
      <div className='popup__container popup__container_type_product'>
        {selectedCard && (
          <CardPopup
            selectedCard={selectedCard}
            onAddProductClick={onAddProductClick}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}

export default PopupProduct;
