import React, { Component } from "react";

import "./App.css";
import Circle from "./Components/Circle";

class App extends Component {
  state = {
    circles: [
      { id: 1, pokemon: "bulbasaur" },
      { id: 2, pokemon: "charmander" },
      { id: 3, pokemon: "squirtle" },
      { id: 4, pokemon: "pikachu" },
    ],
    score: 0,
  };

  clickHandler = () => {
    this.setState((prevState) => ({ score: prevState.score + 1 }));
  };

  render() {
    const circles = this.state.circles.map((circle) => {
      return (
        <Circle
          key={circle.id}
          id={circle.id}
          pokemon={circle.pokemon}
          click={this.clickHandler}
        />
      );
    });

    return (
      <div className="container">
        <h1>Speed Game</h1>
        <p>Your Score: {this.state.score}</p>
        <div className="circles">{circles}</div>
        <div className="buttons">
          <button className="btn-text" id="start" type="submit">
            Start
          </button>
          <button className="btn-text" id="stop" type="submit">
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default App;
