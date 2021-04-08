import React, { Component } from "react";

const handleClick = () => {
  console.log("hola");
};

function Box(props) {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

/*
// Stateless Component
const Main = () => {
  return (
    <main>
      <Box name="Ron Weasley" age="16" title="Student" />
      <Box name="Harry Potter" age="15" title="Student" />
      <Box name="Hermione Granger" age="16" title="Student" />
    </main>
  );
};
*/

// Class Component
class Boxes extends Component {
  state = {
    persons: [
      { name: "Ron Weasley", age: 16, title: "Student" },
      { name: "Harry Potter", age: 15, title: "Student" },
      { name: "Hermione Granger", age: 16, title: "Student" },
    ],
  };

  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "Ron Weasley",
          age: 42,
          title: "Manager of Weasleys' Wizard Wheezes",
        },
        {
          name: "Harry Potter",
          age: 41,
          title: "Head of Magical Law Enforcement",
        },
        { name: "Hermione Granger", age: 42, title: "Minister for Magic" },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Click Me</button>
        <div className="box-container">
          <Box
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />
          <Box
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />
          <Box
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default Boxes;
