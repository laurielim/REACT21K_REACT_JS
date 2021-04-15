import React, { Component } from "react";
import Form from "./Components/Form";
import View from "./Components/View";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
  };

  inputHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <Form input={this.inputHandler} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          role={this.state.role}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
