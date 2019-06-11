import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends Component {
  state = {
    showMenu: false
  };
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__container">
            <div className="header__logo">
              <Link to="/">
                <a className="nav__link">LOGO</a>
              </Link>
            </div>
            <nav className="nav">
              <ul className="nav__items">
                <li className="nav__item">
                  <Link to="/">
                    <a className="nav__link">Главная</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/courses">
                    <a className="nav__link">Курсы</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/about">
                    <a className="nav__link">О нас</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
