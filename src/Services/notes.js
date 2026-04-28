import axios from "axios";

export const fetchNotes = async (filter) => {
	try {
		var response = await axios.get("http://localhost:5240/notes", {
			params: {
				search: filter?.search,
				sortItem: filter?.sortItem,
				sortOrder: filter?.sortOrder
			},
		});
		return response.data.notes;
	}
	catch(err) {
		console.error(err);
	}
}

export const createNote = async (note) => {
	try {
		var response = await axios.post("http://localhost:5240/notes", note);
		return response.status;
	}
	catch(err) {
		console.error(err);
	}
}