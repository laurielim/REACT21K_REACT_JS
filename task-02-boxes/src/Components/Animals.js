import React, { Component } from "react";

import AnimalCard from "./AnimalCard";
import { animals } from "./animalList";
import SearchBox from "./SearchBox";

class Animals extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };

  clickHandler = (name) => alert(`What does the ${name} say?`);

  searchValueHandler = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const animalsList = animalFilter.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          clickMe={() => this.clickHandler(animal.name)}
        />
      );
    });

    return (
      <main>
        <SearchBox search={this.searchValueHandler} />
        {animalsList}
      </main>
    );
  }
}

export default Animals;
