import React from 'react';
import { Link } from 'react-router-dom';
import Livro from '../../assets/Imagens/Tarefa-Livro.svg';
import PDF from '../../files/cabelo-bom-e-o-que.pdf';

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
              Baixem o
              <b>
                <a
                  href={PDF}
                  className="challenge__download"
                  download="cabelo-bom-e-o-que.pdf"
                >
                  {` Livro em PDF `}
                </a>
              </b>
              aqui na nossa Estação Cultural. <br />
              Organizem o grupo e leiam os capítulos. <br />
              Façam uma argumentação sobre a leitura. <br /> <br />
              Agora vem a parte mais divertida. <br />
              Façam um Rap Irado contando um pouco dessa aventura <br />
              que vocês acabaram de ler. <br /> <br />
              Lembre-se de enviar a música para completar o desafio.
            </p>
            <Link to="/">
              <button className="button" onClick={handleOnClick}>
                Aceitar Desafio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
