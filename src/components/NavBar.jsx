import React from 'react';
import { Link } from 'react-router-dom';
import logoMain from '../images/LOGO_IRNI.png';
import bag from '../images/bag.png';

function NavBar() {
  return (
    <nav className='navBar'>
      <ul className='navBar__nav'>
        <li className='navBar__item '>
          <Link to='/productos' className='navBar__link'>
            Productos
          </Link>
        </li>
        <li className='navBar__item '>
          <Link to='/' className='navBar__link'>
            <img className='navBar__logo' src={logoMain} alt='Logo IRNI' />
          </Link>
        </li>
        <li className='navBar__item '>
          <Link to='/carrito' className='navBar__link'>
            <img className='navBar__bag' src={bag} alt='Carrito' />
          </Link>
          <span className='navBar__bag-quantifier'>0</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
