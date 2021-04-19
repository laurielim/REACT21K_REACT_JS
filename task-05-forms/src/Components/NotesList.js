import React from "react";

const NotesList = ({ notes }) => {
	return (
		<section className='notes-container'>
			<h2>Saved Notes</h2>
			<ul>
				{notes.map((note) => {
					return (
						<li key={note.id}>
							"{note.message}" - {note.firstName} {note.lastName}, {note.role}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default NotesList;
