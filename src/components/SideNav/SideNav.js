import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <aside>
      <nav className="aside__nav">
        <div className="aside__logo">LOGO</div>
        <div className="aside__list">
          <h3 className="aside__title">Browse Courses</h3>
          <ul className="aside__items">
            <Link to="/">
              <li className="aside__item aside__item--active">
                <a className="aside__link ">Piano</a>
              </li>
            </Link>
            <Link to="/">
              <li className="aside__item">
                <a className="aside__link">Vocal</a>
              </li>
            </Link>
            <Link to="/">
              <li className="aside__item">
                <a className="aside__link">Guitar</a>
              </li>
            </Link>
            <Link to="/">
              <li className="aside__item">
                <a className="aside__link">Saxofone</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
