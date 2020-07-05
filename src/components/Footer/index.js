import React from 'react';
import Logo from '../../assets/Logos/logo-Arvore.svg';

import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__image">
        <img src={Logo} alt="logo arvore" />
      </div>
    </footer>
  );
}
