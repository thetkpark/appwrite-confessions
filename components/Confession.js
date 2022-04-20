import { Card, CardContent, Typography } from "@mui/material"
import dayjs from "dayjs"

const Confession = ({ content, date }) => {
	return (
		<Card sx={{ minWidth: 275, maxWidth: 512 }}>
			<CardContent>
				<Typography variant="caption" sx={{ mb: 1.5 }} color="text.secondary">
					{dayjs(date).format("MMMM D, YYYY h:mm A")}
				</Typography>
				<br />
				<Typography variant="body">{content}</Typography>
			</CardContent>
		</Card>
	)
}

export default Confession
