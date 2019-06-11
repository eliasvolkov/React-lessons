import React from "react";
import "./CourseCard.scss";

const CourseCard = props => {
  return (
    <div className="card">
      <div className="img__wrapper">
        <img src={props.img} className="card__img" alt="..." />
      </div>
      <div className="card__body">
        <h5 className="card__title">{props.title}</h5>
        <p className="card__descr">Elias Cerutti</p>
        <div className="card__icons">
          <div className="icon">
            <i className="fa fa-thumbs-up" />
            <strong className="up">25</strong>
          </div>
          <div className="icon">
            <i className="fa fa-thumbs-down" />
            <strong className="down">2</strong>
          </div>
          <div className="icon">
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        </div>
        <p className="card__price">3 799 руб.</p>
      </div>
    </div>
  );
};

export default CourseCard;
