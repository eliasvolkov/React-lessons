import React, { Component } from "react";
import SearcInput from "./components/SearcInput";
import ImageCard from "./components/ImageCard";
import ImageList from "./components/ImageList";

class App extends Component {
  state = {
    images: []
  };

  onSubmitForm = title => {
    fetch(
      `https://pixabay.com/api/?key=12000177-898b69bbe8214f36d3fa09010&q=${title}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ images: data.hits });
        console.log(this.state.images[0]);
      })
      .catch(err => err);
  };

  render() {
    return (
      <div className="container">
        <SearcInput onSubmit={this.onSubmitForm} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
