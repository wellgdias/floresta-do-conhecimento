import React from 'react';
import { Link } from 'react-router-dom';

import Jovens from '../../assets/Imagens/Jovens_Capa.svg';
import './style.css';

export default function Home(props) {
  const challenge = props.challenge;

  return (
    <div className="content__home">
      <img src={Jovens} alt="Jovens" className="home__image" />
      {challenge ? (
        <Link to="/finalizar" className="home__group">
          <button className="button">Finalizar Desafio</button>
        </Link>
      ) : (
        <Link to="/grupo" className="home__group">
          <button className="button">Criar Grupo</button>
        </Link>
      )}
    </div>
  );
}
