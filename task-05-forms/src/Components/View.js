import React from "react";

const View = (props) => {
  return (
    <section className="view-container">
      <h2>This is your input:</h2>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.phoneNumber}</p>
      <p>{props.role}</p>
      <p>{props.message}</p>
    </section>
  );
};

export default View;
