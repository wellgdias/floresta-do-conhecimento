import React from 'react';
import { Link } from 'react-router-dom';

import Card1 from '../../assets/Cards/Cards1.svg';
import Card2 from '../../assets/Cards/Cards2.svg';
import Card3 from '../../assets/Cards/Cards3.svg';
import Card4 from '../../assets/Cards/Cards4.svg';
import Card5 from '../../assets/Cards/Cards5.svg';
import Card6 from '../../assets/Cards/Cards6.svg';

import './style.css';

export default function Challenges() {
  return (
    <div className="content__challenges">
      <p className="challenges__text">
        Escolha um <b>Desafio</b>
      </p>

      <div className="challenges">
        <figure className="challenges_card">
          <Link to="/desafio/jacaranda" className="card__info">
            <img src={Card1} alt="desafio 1" />
          </Link>
        </figure>
        <div className="challenges_card">
          <Link to="/desafio/ipe-amarelo">
            <img src={Card2} alt="desafio 2" />
          </Link>
        </div>
        <div className="challenges_card">
          <Link to="/desafio/mangueira">
            <img src={Card3} alt="desafio 3" />
          </Link>
        </div>
      </div>

      <div className="challenges">
        <div className="challenges_card">
          <Link to="/desafio/magnolia">
            <img src={Card4} alt="desafio 4" />
          </Link>
        </div>
        <div className="challenges_card">
          <Link to="/desafio/laranjeira">
            <img src={Card5} alt="desafio 5" />
          </Link>
        </div>
        <div className="challenges_card">
          <Link to="/desafio/pitangueira">
            <img src={Card6} alt="desafio 6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
