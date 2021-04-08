import React, { Component } from "react";

const AnimalCard = (props) => {
  let altText = `Photograph of a ${props.name} from Unsplash`;
  return (
    <div className="box animal-card">
      <h2>{props.name}</h2>
      <img src={props.img} alt={altText} />
    </div>
  );
};

class Animals extends Component {
  state = {
    animals: [
      { name: "Fox", img: "" },
      { name: "Rabbit", img: "" },
      { name: "Wolf", img: "" },
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
