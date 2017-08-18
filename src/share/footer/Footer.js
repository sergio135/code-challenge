import React from 'react';
import './Footer.css';

const Footer = props => (
  <div className="container-fluid Footer">
    <div className="container Footer__container">
      <div className="row">
        <div className="col-3">
          <span className="Footer__container__titulo">Sobre Billin</span>
        </div>
        <div className="col-3">
          <span className="Footer__container__titulo">Empresas</span>
        </div>
        <div className="col-3">
          <span className="Footer__container__titulo">Recursos</span>
        </div>
        <div className="col-3">
          <span className="Footer__container__titulo">Billin</span>
        </div>
      </div>
    </div>
  </div>
)

export default Footer;
