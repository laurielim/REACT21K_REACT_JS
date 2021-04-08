import React from "react";

const Circle = (props) => {
  let classList = `circle ${props.pokemon} active`;
  return <button className={classList}>{props.id}</button>;
};

export default Circle;
