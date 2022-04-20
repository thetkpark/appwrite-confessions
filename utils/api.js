import axios from "axios"

const confessionsApi = axios.create({
	baseURL: `${process.env.API_ENDPOINT}/api/confessions`
})

export const createConfession = async (content) => {
	const response = await confessionsApi.post("", {
		content
	})
	return response.data
}

export const getConfessions = async () => {
	const response = await confessionsApi.get("")
	return response.data
}
