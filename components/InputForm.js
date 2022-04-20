import { useState } from "react"
import { TextField, Button } from "@mui/material"
import { Send as SendIcon } from "@mui/icons-material"

const InputForm = ({ onSubmitConfession }) => {
	const [confession, setConfession] = useState("")

	return (
		<div>
			<TextField
				label="Your Confession"
				variant="standard"
				value={confession}
				onChange={(e) => setConfession(e.target.value)}
			/>
			<Button
				variant="contained"
				endIcon={<SendIcon />}
				onClick={() => onSubmitConfession(confession)}
			>
				Submit
			</Button>
		</div>
	)
}

export default InputForm
