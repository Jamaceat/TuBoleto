import {Paper, Typography} from "@mui/material"
import {Box} from "@mui/system"
import React, {useContext} from "react"
import {AllData} from "../Context/ContextProvider"

export default function ManageAccount() {
	const {userList} = useContext(AllData)

	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateAreas: `" b b b b" " b b b b" " b b b b" "crud crud crud crud" "crud crud crud crud"`,
				minHeight: "82vh",
			}}
		>
			<Paper
				sx={{
					gridArea: "b",
					backgroundColor: "#C3DEDB",
					margin: "1rem",
					borderRadius: "1rem",
				}}
			>
				<Typography variant="h2" sx={{textAlign: "center"}}>
					Información
				</Typography>
			</Paper>
			{userList.sesion.type === "Seller" && (
				<Paper sx={{gridArea: "crud", border: "1px red solid"}}>
					{/* <Crud/> */}
				</Paper>
			)}
		</Box>
	)
}
