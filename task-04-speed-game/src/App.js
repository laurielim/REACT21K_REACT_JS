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
    current: 0,
  };

  timer = undefined;
  pace = 1500;

  clickHandler = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  nextCircle = () => {
    const getRandomNumber = (currentActive) => {
      let nextActive;
      do {
        nextActive = Math.floor(Math.random() * 4);
      } while (currentActive === nextActive);

      return nextActive;
    };

    this.setState({
      current: getRandomNumber(this.state.current),
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("active circle is ", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
  };

  endHandler = () => {
    clearTimeout(this.timer);
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
          <button
            onClick={this.startHandler}
            className="btn-text"
            id="start"
            type="submit"
          >
            Start
          </button>
          <button
            onClick={this.endHandler}
            className="btn-text"
            id="stop"
            type="submit"
          >
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default App;
