import React, { Component } from "react";
import Form from "./Components/Form";
import View from "./Components/View";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Form />
        <View />
      </div>
    );
  }
}

export default App;
