import axios from "axios"

const baseURL = `${process.env.API_ENDPOINT}/api/confessions`
console.log(baseURL)

export const createConfession = async (content) => {
	const response = await axios.post(baseURL, {
		content
	})
	return response.data
}

export const getConfessions = async () => {
	const response = await axios.get(baseURL)
	return response.data
}
