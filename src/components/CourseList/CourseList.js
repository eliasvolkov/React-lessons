import React, { Component } from "react";
import CourseCard from "../CourseCard/CourseCard";
import "./CourseList.scss";
import CourseItem from "../CourseItem/CourseItem";

export default class CourseList extends Component {
  state = {
    grid: true,
    list: false,
    btnGrid: "btn btn--active",
    btnList: "btn"
  };

  onClickGrid = () => {
    this.setState({
      grid: true,
      list: false,
      btnGrid: "btn btn--active",
      btnList: "btn"
    });
  };
  onClickList = () => {
    this.setState({
      grid: false,
      list: true,
      btnGrid: "btn ",
      btnList: "btn btn--active"
    });
  };

  renderList = () => {
    if (this.state.grid) {
      return this.props.item.map(item => {
        return (
          <div className="grid__item">
            <CourseCard key={item.id} img={item.img} title={item.title} />
          </div>
        );
      });
    } else {
      return this.props.item.map(item => {
        return (
          <div className="list__item">
            <CourseItem key={item.id} img={item.img} title={item.title} />
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="list">
        <div className={this.state.grid ? "grid__row" : "list__row"}>
          {this.renderList()}
        </div>
        <div className="buttons">
          <button className={this.state.btnGrid} onClick={this.onClickGrid}>
            <i className="fa fa-th" />
          </button>
          <button className={this.state.btnList} onClick={this.onClickList}>
            <i className="fa fa-list" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}
