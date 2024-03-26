import React from 'react';

function Header() {
  return (
    <section className='header'>
      <div className='header__data'>
        <p className='header__info'>
          ¿Alguna vez has sentido ese impulso irresistible de añadir un toque
          especial a tu vida cotidiana?
        </p>
        <h2 className='header__phrase'>
          ¡Entonces has llegado al lugar correcto!
        </h2>
      </div>
      <div className='header__images'></div>
    </section>
  );
}

export default Header;
