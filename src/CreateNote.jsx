import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {

	const [expand, setExpand] = useState(false);

	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	const inputEvent = (e) => {
		// const value= e.target.value;
		// const name= e.target.name;

		const { name, value } = e.target;

		setNote((olddata) => {
			return {
				...olddata,
				[name]: value,
			}
		})
	}

	const addEvent = () => {
		props.passNote(note);
		setNote({
			title: '',
			content: '',
		})
	}

	const expandIt = () => {
		setExpand(true);
	}

	const backTo = () => {
		setExpand(false);
	}

	return (
		<>
			<div className="main_note" onDoubleClick={backTo}>
				<form>
					{expand ?
						<input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"

						/> : null}
					<textarea rows='' column="" name="content" value={note.content}
						onChange={inputEvent}
						placeholder="Write a note..."
						onClick={expandIt}


					/>

					{expand ?
						<Button onClick={addEvent}>
							<AddIcon className="plus_sign" />
						</Button> : null}
				</form>
			</div>
		</>
	);

}

export default CreateNote;