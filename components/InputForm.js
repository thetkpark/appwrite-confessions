import { useEffect, useState } from "react"
import { TextField, Button } from "@mui/material"
import { Send as SendIcon } from "@mui/icons-material"

const InputForm = ({ onSubmitConfession }) => {
	const [confession, setConfession] = useState("")
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const count = confession.length
		if (count > 280) setIsError(true)
		else setIsError(false)
	}, [confession])

	return (
		<div>
			<TextField
				label={`Your Confession (${confession.length}/280)`}
				variant="standard"
				value={confession}
				error={isError}
				onChange={(e) => setConfession(e.target.value)}
			/>
			<Button
				variant="contained"
				endIcon={<SendIcon />}
				disabled={isError}
				onClick={() => onSubmitConfession(confession)}
			>
				Submit
			</Button>
		</div>
	)
}

export default InputForm
