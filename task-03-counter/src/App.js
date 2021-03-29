import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  removeHandler = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="circle">{this.state.counter}</div>
        <button onClick={this.addHandler} className="add">
          Add one
        </button>
        <button onClick={this.removeHandler} className="remove">
          Remove one
        </button>
        <button onClick={this.resetHandler} className="reset">
          Reset
        </button>
      </div>
    );
  }
}

export default App;
