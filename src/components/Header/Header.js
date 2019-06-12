import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
  state = {
    showMenu: false
  };
  render() {
    return (
      <div>
        <header className="header">
          <form className="header__form">
            <div className="form__input-group">
              <button className="form__btn">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
              <input type="text" className="form__input" placeholder="Search" />
            </div>
          </form>
          <div className="header__auth">
            <div className="auth__icon" />
            <button className="auth__btn">Sing in</button>
          </div>
        </header>
      </div>
    );
  }
}
