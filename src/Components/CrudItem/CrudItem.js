import React, {useState} from "react"
import {Box, Button} from "@mui/material"
import EditEvent from "../EditEvent/"
import moment from "moment"

export default function CrudItem({id, title, date, place, imgUrl, method}) {
	const [data, setData] = useState({id, title, date, place, imgUrl})

	const updateData = async (event_data) => {
		await setData({
			...data,
			title: event_data[0],
			date: event_data[1],
			place: event_data[2],
			imgUrl: event_data[3]
		})
		method(data)
	}

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
			<p className="borde"> {moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")} </p>
			<p className="borde"> {place} </p>
			<p className="borde"> {imgUrl} </p>
			<Box
				display={"flex"}
				sx={{alignItems: "center", flexDirection: "column", gap: ".2rem"}}
			>
				<EditEvent title={title} date={date} place={place} imgUrl={imgUrl} method={updateData}/>
				<Button variant="contained" color="error">
					Delete
				</Button>
			</Box>
		</Box>
	)
}
