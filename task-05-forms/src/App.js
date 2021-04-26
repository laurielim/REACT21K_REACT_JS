import React, { Component } from "react";
import axios from "axios";

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
		axios
			// Working with local server
			// .get(`//localhost:3001/notes`)
			.get(`//murmuring-peak-15912.herokuapp.com`)
			.then((res) => this.setState({ notes: res.data.notes }));
	}

	inputHandler = (event) => {
		this.setState({
			form: { ...this.state.form, [event.target.id]: event.target.value },
		});
	};

	showPopupHandler = (event) => {
		event.preventDefault();
		this.setState({ showPopup: true });
	};

	closePopupHandler = () => {
		this.setState({ showPopup: false });
	};

	sendDataHandler = () => {
		// request as in HTTP request
		const requestOptions = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(this.state.form),
		};
		fetch("//murmuring-peak-15912.herokuapp.com", requestOptions).then(
			alert("Your Message was sent!", window.location.reload())
		);

		// Working with local server
		// axios.post(`//localhost:3001/notes`, this.state.form);
	};

	render() {
		return (
			<div className='container'>
				<main>
					<Form input={this.inputHandler} submit={this.showPopupHandler} />
					<View {...this.state.form} />
					{this.state.notes === [] ? (
						<section className='notes-container'>
							<h2>Loading...</h2>
						</section>
					) : (
						<NotesList notes={this.state.notes} />
					)}
				</main>
				{this.state.showPopup && (
					<Popup
						{...this.state.form}
						submit={this.sendDataHandler}
						backBtn={this.closePopupHandler}
					/>
				)}
			</div>
		);
	}
}

export default App;
