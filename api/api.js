import axios from "axios"

export const createConfession = async (content) => {
	const response = await axios.post("/api/confessions", {
		content
	})
	return response.data
}

export const getConfessions = async () => {
	const response = await axios.get("/api/confessions")
	return response.data
}
