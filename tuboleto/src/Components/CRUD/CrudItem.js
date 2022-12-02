import React from "react"
import {Box, Button} from "@mui/material"

export default function CrudItem({id, title, date, place, imgUrl}) {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: "1fr 3fr 2fr 3fr 2fr 1fr",
				marginX: "1rem",
				"&>.borde": {
					borderRight: "1px solid gray",
					textAlign: "left",
					paddingX: "1rem",
					textOverflow: "ellipsis",
					overflow: "hidden",
					alignSelf: "center",
				},
			}}
		>
			<p className="borde"> {id} </p>
			<p className="borde"> {title} </p>
			<p className="borde"> {date} </p>
			<p className="borde"> {place} </p>
			<p className="borde"> {imgUrl} </p>
			<Box
				display={"flex"}
				sx={{alignItems: "center", flexDirection: "column", gap: ".2rem"}}
			>
				<Button variant="contained" sx={{marginTop: ".25rem"}}>
					Update
				</Button>
				<Button variant="contained" color="error">
					Delete
				</Button>
			</Box>
		</Box>
	)
}
