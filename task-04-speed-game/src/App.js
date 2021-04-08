import React, { Component } from "react";

import "./App.css";
import Circle from "./Components/Circle";

class App extends Component {
  state = {
    circles: [
      { id: 1, pokemon: "bulbasaur" },
      { id: 1, pokemon: "charmander" },
      { id: 1, pokemon: "squirtle" },
      { id: 1, pokemon: "pikachu" },
    ],
  };
  render() {
    const circles = this.state.circles.map((circle) => {
      return <Circle id={circle.id} pokemon={circle.pokemon} key={circle.id} />;
    });

    return (
      <div className="container">
        <h1>Speed Game</h1>
        <p>
          Your Score: <span id="score">0</span>
        </p>
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
