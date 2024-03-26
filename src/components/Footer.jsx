import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../images/facebook.png';

function Footer() {
  return (
    <section className='footer'>
      <img className='footer__logo' />
      <ul className='footer__social-media'>
        <li className='footer__item'>
          <Link>
            <img src={facebook} />
            <h4> I really Need It</h4>
          </Link>
        </li>
        <li className='footer__item'>
          <Link>
            <img src={facebook} />
            <h4> I_really_Need_It_mx</h4>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
