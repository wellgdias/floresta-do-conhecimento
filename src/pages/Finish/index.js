import React from 'react';
import { Link } from 'react-router-dom';

import Upload from '../../assets/Imagens/Botao-Upload.svg';

import './style.css';

export default function Finish(props) {
  const setChallenge = props.setChallenge;

  function handleOnClick() {
    setChallenge(false);
  }

  return (
    <div className="content__finish">
      <p className="finish__text">
        Finalize o <b>seu Desafio</b>
      </p>

      <img src={Upload} alt="upload" className="finish__upload" />

      <p className="finish__details">
        Envie seu arquivo de Audio, Vídeo ou Texto
      </p>

      <Link to="/parabens">
        <button className="button" onClick={handleOnClick}>
          Confirmar
        </button>
      </Link>
    </div>
  );
}
