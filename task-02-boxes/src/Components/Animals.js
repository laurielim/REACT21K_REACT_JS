import React, { Component } from "react";

const AnimalCard = (props) => {
  let altText = `Photograph of a ${props.name} from Unsplash`;
  return (
    <div className="box animal-card">
      <h2>{props.name}</h2>
      <img src={props.img} alt={altText} />

      <button>Click Me</button>
    </div>
  );
};

class Animals extends Component {
  state = {
    animals: [
      { name: "Fox", img: "https://source.unsplash.com/xUUZcpQlqpM/1600x1000" },
      {
        name: "Rabbit",
        img: "https://source.unsplash.com/um1BsyEVB5U/1600x1000",
      },
      {
        name: "Wolf",
        img: "https://source.unsplash.com/WFPWB7Vum1E/1600x1000",
      },
    ],
  };

  render() {
    const animalsList = this.state.animals.map((animal) => {
      return (
        <AnimalCard key={animal.name} name={animal.name} img={animal.img} />
      );
    });

    return <main>{animalsList}</main>;
  }
}

export default Animals;
