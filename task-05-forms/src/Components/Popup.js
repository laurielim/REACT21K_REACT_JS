import React from "react";

const Popup = ({
	firstName,
	lastName,
	phoneNumber,
	role,
	message,
	backBtn,
}) => {
	const reloadApp = () => window.location.reload();
	return (
		<div className='overlay'>
			<section className='popup-container'>
				<h2>Confirm Your Details</h2>
				<p>First Name: {firstName}</p>
				<p>Last Name: {lastName}</p>
				<p>Phone Number: {phoneNumber}</p>
				<p>Role: {role}</p>
				<p>Message: {message}</p>

				<button type='submit' onClick={reloadApp} className='submit-btn'>
					Send
				</button>
				<button
					type='button'
					aria-describedby='form'
					onClick={backBtn}
					className='back-btn'
				>
					Go back
				</button>
			</section>
		</div>
	);
};

export default Popup;
