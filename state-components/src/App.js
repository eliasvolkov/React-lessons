import React, { Component } from "react";
import SearcInput from "./components/SearcInput";

class App extends Component {
  state = {
    imageTitle: ""
  };

  onSubmitForm = title => {
    fetch(
      `https://pixabay.com/api/?key=12000177-898b69bbe8214f36d3fa09010&q=${title}`
    )
      .then(res => res.json())
      .then(data => console.log(data.hits))
      .catch(err => err);
  };

  render() {
    return (
      <div className="container">
        <SearcInput onSubmit={this.onSubmitForm} />
      </div>
    );
  }
}

export default App;
