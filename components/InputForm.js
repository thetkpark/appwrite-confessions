import { useEffect, useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import { Send as SendIcon } from "@mui/icons-material"
import styles from "../styles/InputForm.module.css"

const InputForm = ({ onSubmitConfession }) => {
	const [confession, setConfession] = useState("")
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const count = confession.length
		if (count > 280) setIsError(true)
		else setIsError(false)
	}, [confession])

	const formSubmit = (e) => {
		e.preventDefault()
		onSubmitConfession(confession)
	}

	return (
		<form className={styles.form} onSubmit={formSubmit}>
			<TextField
				label={`Your Confession (${confession.length}/280)`}
				variant="standard"
				value={confession}
				error={isError}
				onChange={(e) => setConfession(e.target.value)}
				className={styles.textInput}
			/>
			<Box sx={{ width: "2%" }} />
			<Button
				variant="contained"
				endIcon={<SendIcon />}
				disabled={isError}
				type="submit"
				// onClick={() => onSubmitConfession(confession)}
				className={styles.submitButton}
			>
				Submit
			</Button>
		</form>
	)
}

export default InputForm
