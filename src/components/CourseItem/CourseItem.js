import React from "react";
import "./CourseItem.scss";

const CourseItem = props => {
  return (
    <div className="item">
      <div className="row">
        <div className="item__img">
          <img src={props.img} alt="" />
        </div>
        <div className="item__body">
          <div className="item__title">{props.title}</div>
          <div className="item__descr">{props.descr}</div>
          <div className="item__bottom">
            <div className="item__icons">
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
          </div>
          <div className="item__price">3 999 руб.</div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
