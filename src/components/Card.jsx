import React from 'react';
import foto from '../images/snoopy-airpods.png';
import { useState } from 'react';
function Card({ onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img className='card__image' src={foto} />
      <div className='card__data'>
        <h3 className='card__header'>Case airpods Snoopy</h3>
        <p className='card__price'> $299 </p>
      </div>
    </div>
  );
}

export default Card;
