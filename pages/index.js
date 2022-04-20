import { useEffect, useState } from "react"
import InputForm from "../components/InputForm"
import Confession from "../components/Confession"
import { createConfession, getConfessions } from "../api/api"
import styles from "../styles/Home.module.css"
import { Grid, Box } from "@mui/material"

export default function Home() {
	const [confessions, setConfessions] = useState([])

	useEffect(() => {
		getConfessions().then(setConfessions)
	}, [])

	const onSubmitConfession = async (content) => {
		if (content.length > 280) return
		const con = await createConfession(content)
		setConfessions([...confessions, con])
	}

	return (
		<div className={styles.main}>
			<InputForm onSubmitConfession={onSubmitConfession} />
			<Box sx={{ height: "50px" }} />
			<Grid container spacing={3}>
				{confessions.map((confession) => (
					<Grid item xs={4} key={confession.$id}>
						<Confession {...confession} />
					</Grid>
				))}
			</Grid>
		</div>
	)
}
