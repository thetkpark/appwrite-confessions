// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createConfession, listConfession } from "../../api/appwrite"
export default async function handler(req, res) {
	if (req.method === "POST") {
		const { content } = req.body
		const doc = await createConfession(content)
		return res.status(201).send(doc)
	} else {
		const docs = await listConfession()
		return res.status(200).send(docs)
	}
}
