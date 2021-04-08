import React, { Component } from "react";

const AnimalCard = (props) => {
  let altText = `Photograph of a ${props.name} from Unsplash`;
  return (
    <div className="box animal-card">
      <h2>{props.name}</h2>
      <img src={props.img} alt={altText} />
      <button onClick={props.clickMe}>Click Me</button>
    </div>
  );
};

class Animals extends Component {
  state = {
    animals: [
      {
        id: 1,
        name: "Fox",
        img: "https://source.unsplash.com/xUUZcpQlqpM/1600x1000",
      },
      {
        id: 2,
        name: "Rabbit",
        img: "https://source.unsplash.com/um1BsyEVB5U/1600x1000",
      },
      {
        id: 3,
        name: "Wolf",
        img: "https://source.unsplash.com/WFPWB7Vum1E/1600x1000",
      },
    ],
  };

  clickHandler = (name) => alert(`What does the ${name} say?`);

  render() {
    const animalsList = this.state.animals.map((animal) => {
      return (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          img={animal.img}
          clickMe={() => this.clickHandler(animal.name)}
        />
      );
    });

    return <main>{animalsList}</main>;
  }
}

export default Animals;
