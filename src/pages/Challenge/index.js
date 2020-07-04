import React from 'react';
import { Link } from 'react-router-dom';

import Livro from '../../assets/Imagens/Tarefa-Livro.svg';

import './style.css';

export default function Challenge(props) {
  const setChallenge = props.setChallenge;

  function handleOnClick() {
    setChallenge(true);
  }

  return (
    <div className="content__challenge">
      <p className="challenge__text">
        Agora começa a <b>Diversão</b>
      </p>
      <div>
        <div className="challenge__book">
          <img src={Livro} alt="livro" />
          <div className="challenge__info">
            <p className="challenge__instructions">
              Baixem o <b>livro em PDF</b> aqui na nossa Estação Cultural <br />
              Organize o grupo e leiam os capítulos <br />
              Façam uma discussão sobre a leitura <br /> <br />
              Agora vem a parte mais divertida <br />
              Façam um Rap Irado contando um pouco dessa aventura <br />
              que vocês acabaram de ler
            </p>
            <Link to="/">
              <button className="button" onClick={handleOnClick}>
                Confirmar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
