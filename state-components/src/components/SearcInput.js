import React, { Component } from "react";

export default class SearcInput extends Component {
  render() {
    return (
      <div className="search card card-body mt-5">
        <h1>Search image</h1>
        <form>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Movie title"
              />
            </div>
            <div className="col-sm-3">
              <button className="btn btn-success">Success</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
