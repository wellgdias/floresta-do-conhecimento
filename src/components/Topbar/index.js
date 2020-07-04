import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logos/Logo-Floresta.svg';

import './style.css';

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar__logo">
        <Link to="/">
          <img src={Logo} alt="logo-floresta" className="logo" />
        </Link>
      </div>
      <div className="topbar__menu">
        <button className="topbar__button">Sobre a Floresta</button>
        <button className="topbar__button">Alunos</button>
        <button className="topbar__button">Professores</button>
      </div>
    </header>
  );
}
