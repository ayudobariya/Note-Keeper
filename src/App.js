import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
	const [addItem, setAddItem] = useState([]);

	const addNote = (note) => {
		// alert("I am Cliked")
		setAddItem((olddata) => {
			return [...olddata, note];
		});

		console.log(note);
	};

	const onDelete = (id) => {
		setAddItem((olddata) => 
			olddata.filter((curdata,index) => {
				return index !== id;
			})
		)
	};
	return (
		<>
			<Header />

			<CreateNote
				passNote={addNote}
			/>
			{/* <Note /> */}

			{addItem.map((curval,index) => {
				return <Note 
				key={index}
				id={index}
				title={curval.title}
				content={curval.content}
				deleteItem = {onDelete}   />
			})}
			<Footer />
		</>
	);
}

export default App;
