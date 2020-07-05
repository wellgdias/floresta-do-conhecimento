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

      <div>
        <label htmlFor="fileUpload">
          <img src={Upload} alt="upload" className="finish__upload" />
        </label>
        <input hidden id="fileUpload" type="file" accept="video/*,audio/*" />
      </div>

      <p className="finish__details">
        Envie seu arquivo de Audio, Vídeo ou Texto
      </p>

      <Link to="/parabens">
        <button className="button" onClick={handleOnClick}>
          Enviar
        </button>
      </Link>
    </div>
  );
}
