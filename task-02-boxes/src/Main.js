import React from "react";

function Box(props) {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
    </div>
  );
}

const Main = () => {
  return (
    <main>
      <Box name="Ron Weasley" age="16" title="Student" />
      <Box name="Harry Potter" age="15" title="Student" />
      <Box name="Hermione Granger" age="16" title="Student" />
    </main>
  );
};

export default Main;
