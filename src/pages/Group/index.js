import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Home() {
  return (
    <div className="content__group">
      <p className="group__text">
        Chegou a hora! <br />
        <b>Monte seu grupo e bora curtir</b> <br />
        essa aventura juntos.
      </p>

      <div className="group__student">
        <p className="student__number">1</p>
        <input
          type="text"
          className="student__name"
          placeholder="Informe o nome do Aluno"
        />
        <input type="text" className="student__room" placeholder="Sala" />
        <input type="number" className="student__year" placeholder="Ano" />
      </div>
      <div className="group__student">
        <p className="student__number">2</p>
        <input
          type="text"
          className="student__name"
          placeholder="Informe o nome do Aluno"
        />
        <input type="text" className="student__room" placeholder="Sala" />
        <input type="number" className="student__year" placeholder="Ano" />
      </div>
      <div className="group__student">
        <p className="student__number">3</p>
        <input
          type="text"
          className="student__name"
          placeholder="Informe o nome do Aluno"
        />
        <input type="text" className="student__room" placeholder="Sala" />
        <input type="number" className="student__year" placeholder="Ano" />
      </div>
      <div className="group__student">
        <p className="student__number">4</p>
        <input
          type="text"
          className="student__name"
          placeholder="Informe o nome do Aluno"
        />
        <input type="text" className="student__room" placeholder="Sala" />
        <input type="number" className="student__year" placeholder="Ano" />
      </div>

      <Link to="/desafios">
        <button className="button">Confirmar</button>
      </Link>
    </div>
  );
}
