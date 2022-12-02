import React from "react"
import {Box} from "@mui/system"
import EventCard from "./Card/EventCard"

export default function Events() {
	return (
		<>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: " repeat(auto-fill,minmax(20rem,1fr))",
				}}
			>
				<EventCard />
				<EventCard />
			</Box>
		</>
	)
}
