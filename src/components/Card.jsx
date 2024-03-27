import React from 'react';
import foto from '../images/snoopy-airpods.png';
function Card() {
  return (
    <div className='card'>
      <img className='card__image' src={foto} />
      <div className='card__data'>
        <h3 className='card__header'>Case airpods Snoopy</h3>
        <p className='card__price'> $299 </p>
      </div>
    </div>
  );
}

export default Card;
