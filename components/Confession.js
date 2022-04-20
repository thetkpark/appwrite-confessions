import { Card, CardContent, Typography } from "@mui/material"
import dayjs from "dayjs"

const Confession = ({ content, date }) => {
	return (
		<Card sx={{ minWidth: 275, maxWidth: 512 }}>
			<CardContent>
				<Typography variant="caption" sx={{ mb: 1.5 }} color="text.secondary">
					{dayjs(date).format("MMMM DD, YYYY")}
				</Typography>
				<br />
				<Typography variant="body">{content}</Typography>
			</CardContent>
			{/* <CardActions>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	)
}

export default Confession
