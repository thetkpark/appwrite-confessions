import sdk from "node-appwrite"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

const client = new sdk.Client()

client
	.setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
	.setProject(process.env.APPWRITE_PROJECT) // Your project ID
	.setKey(process.env.APPWRITE_SECRETKEY)
	.setSelfSigned(true)

const database = new sdk.Database(client)
export const createConfession = async (content) => {
	const docs = await database.createDocument(
		process.env.APPWRITE_CONFESSIONS_COLLECTION_ID,
		"unique()",
		{
			content,
			createAt: dayjs.utc().toISOString()
		}
	)

	return docs
}

export const listConfession = async () => {
	const docs = await database.listDocuments("625fd2e08e018ebdff44")
	return docs.documents
}
