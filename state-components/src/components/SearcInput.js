import React, { Component } from "react";

export default class SearcInput extends Component {
  state = {
    imageTitle: ""
  };

  onCahgeInput = e => {
    this.setState({ imageTitle: e.target.value });
  };

  onSubmitForm = e => {
    console.log(this.state.imageTitle);
    e.preventDefault();
  };

  render() {
    return (
      <div className="search card card-body mt-5">
        <h1>Search image</h1>
        <form onSubmit={this.onSubmitForm}>
          <div className="row">
            <div className="col-sm-9">
              <input
                onChange={this.onCahgeInput}
                value={this.state.imageTitle}
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
