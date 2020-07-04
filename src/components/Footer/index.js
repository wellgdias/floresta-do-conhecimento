import React from 'react';
import Logo from '../../assets/Logos/logo-Arvore.svg';

import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo arvore" />
    </footer>
  );
}
