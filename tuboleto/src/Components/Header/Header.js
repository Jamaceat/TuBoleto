import React from "react"
import styles from "./Header.module.css"
import {Typography, Box, Paper} from "@mui/material"
import Navbar from "../Navigation/Navbar"

const actualStyle = {
	noRightBorder: {borderRadius: "1rem 0 0 1rem"},
}

export default function Header() {
	return (
		<Box className={styles.container}>
			<Paper
				elevation={5}
				className={styles.menu}
				sx={{
					...actualStyle.noRightBorder,
					overflow: "hidden",
					maxHeight: "5rem",
				}}
			>
				<Paper
					sx={{
						height: "1rem",
						width: "1rem",
						backgroundColor: "#0874cc",
						borderRadius: "50%",
						marginRight: ".25rem",
						position: "relative",
						top: "1.9rem",
					}}
				></Paper>
				<Navbar/>
			</Paper>
		</Box>
	)
}
