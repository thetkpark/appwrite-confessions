import { useEffect, useState } from "react"
import InputForm from "../components/InputForm"
import Confession from "../components/Confession"
import { createConfession, getConfessions } from "../api/api"
import styles from "../styles/Home.module.css"

export default function Home() {
	const [confessions, setConfessions] = useState([])

	useEffect(() => {
		getConfessions().then(setConfessions)
	}, [])

	const onSubmitConfession = async (content) => {
		const con = await createConfession(content)
		setConfessions([...confessions, con])
	}

	return (
		<div>
			<InputForm onSubmitConfession={onSubmitConfession} />
			{confessions.map((confession) => (
				<Confession key={confession.$id} {...confession} />
			))}
		</div>
	)
}
