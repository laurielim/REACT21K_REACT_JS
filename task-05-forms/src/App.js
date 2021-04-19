import React, { Component } from "react";

import "./App.css";

import Form from "./Components/Form";
import View from "./Components/View";
import Popup from "./Components/Popup";
import NotesList from "./Components/NotesList";

class App extends Component {
	state = {
		form: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			role: "",
			message: "",
		},
		showPopup: false,
		notes: [],
	};

	componentDidMount() {
		fetch("//localhost:3001/notes")
			.then((resp) => resp.json())
			.then((data) => this.setState({ notes: data }));
	}

	inputHandler = (event) => {
		let newForm = { ...this.state.form };
		newForm[event.target.id] = event.target.value;
		this.setState({ form: newForm });
	};

	showPopupHandler = (event) => {
		event.preventDefault();
		this.setState({ showPopup: true });
	};

	closePopupHandler = () => {
		this.setState({ showPopup: false });
	};

	render() {
		const props = {
			firstName: this.state.form.firstName,
			lastName: this.state.form.lastName,
			phoneNumber: this.state.form.phoneNumber,
			role: this.state.form.role,
			message: this.state.form.message,
			backBtn: this.closePopupHandler,
		};
		return (
			<div className='container'>
				<main>
					<Form input={this.inputHandler} submit={this.showPopupHandler} />
					<View {...props} />
					<NotesList notes={this.state.notes} />
				</main>
				{this.state.showPopup && <Popup {...props} />}
			</div>
		);
	}
}

export default App;
