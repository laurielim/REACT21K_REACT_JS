import React from "react";

const View = ({ firstName, lastName, phoneNumber, role, message }) => {
	return (
		<section className='view-container'>
			<h2>This is your input:</h2>
			<div className='copybook'>
				<p>
					First Name: <span className='handwritting'>{firstName}</span>
				</p>
				<p>
					Last Name: <span className='handwritting'>{lastName}</span>
				</p>
				<p>
					Phone Number: <span className='handwritting'>{phoneNumber}</span>
				</p>
				<p>
					Role: <span className='handwritting'>{role}</span>
				</p>
				<p>
					Message: <span className='handwritting'>{message}</span>
				</p>
			</div>
		</section>
	);
};

export default View;
