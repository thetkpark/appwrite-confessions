import axios from "axios"

export const createConfession = async (content) => {
	console.log(baseURL)
	const response = await axios.post("/api/confessions", {
		content
	})
	return response.data
}

export const getConfessions = async () => {
	const response = await axios.get(
		`${process.env.API_ENDPOINT}/api/confessions`
	)
	return response.data
}
