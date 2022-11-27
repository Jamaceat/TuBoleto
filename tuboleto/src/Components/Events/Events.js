import React from "react"
import {Box} from "@mui/system"
import EventCard from "./Card/EventCard"

export default function Events() {
	return (
		<>
			<Box sx={{display: "grid", gridTemplateColumns: " 1fr 1fr 1fr 1fr"}}>
				<EventCard />
			</Box>
		</>
	)
}
