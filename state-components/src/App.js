import React, { Component } from "react";
import SearcInput from "./components/SearcInput";

class App extends Component {
  state = {
    imageTitle: ""
  };

  onSubmitForm = title => {
    console.log(title);
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
