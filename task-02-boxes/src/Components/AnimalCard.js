import React from "react";

const AnimalCard = (props) => {
  let altText = `Photograph of a ${props.name} from Unsplash`;
  return (
    <div className="box animal-card">
      <h2>{props.name}</h2>
      <img
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt={altText}
      />
      <button onClick={props.clickMe}>Click Me</button>
    </div>
  );
};

export default AnimalCard;
