import React from 'react';
import Jovens from '../../assets/Imagens/Adolescente.svg';

export default function Complete() {
  return (
    <div className="content__finish">
      <p className="finish__text">
        Missão dada, <b>Missão Cumprida</b>
      </p>

      <p className="finish__details">
        Agora é só aguardar que teremos alguns pontos para ajudar na nota
        semestral
      </p>

      <img src={Jovens} alt="Jovens comemorando" className="finish__image" />
    </div>
  );
}
