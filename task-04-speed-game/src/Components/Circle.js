import React from "react";

const Circle = (props) => {
  let classList = `circle ${props.pokemon} ${props.active ? "" : "inactive"}`;
  return (
    <button
      onClick={props.click}
      className={classList}
      value={props.id}
    ></button>
  );
};

export default Circle;
