import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logotipo-billin@2x.png';

const Header = props => (
  <div className="container-fluid Header">
    <div className="container Header__container">
      <div>
        <Link to="/">
          <img src={logo} alt="logotipo Billin" className="Header__container__logo" />
        </Link>
      </div>
      <div className="Header__container__menu-box">
        Aun no implementado
      </div>
    </div>
  </div>
);

export default Header;
