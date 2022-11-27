import React from "react"
import styles from "./Header.module.css"
import {Typography, Box, Paper} from "@mui/material"

const actualStyle = {
	item: {
		padding: "1.5rem 1rem 0 1rem",
		"&:hover": {backgroundPosition: "100% 100%"},
	},
	noRightBorder: {borderRadius: "1rem 0 0 1rem"},
	backgroundWithBeforeEffect: {
		background: "linear-gradient(#FFFFFF, #FFFFFF 50%, #0874cc 50%, #0874cc)",
		backgroundSize: "100% 200%",

		transition: "background .5s",
		paddingBottom: "3rem",
		borderRadius: ".25rem .25rem 0 0",
	},
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
				<h1 className={styles.titulo}>Tuboleto</h1>
				<Box
					sx={{
						...actualStyle.item,
						...actualStyle.backgroundWithBeforeEffect,
					}}
				>
					<Typography variant="body1">log in</Typography>
				</Box>
				<Box
					sx={{
						...actualStyle.item,
						...actualStyle.backgroundWithBeforeEffect,
					}}
				>
					<Typography variant="body1">Join us</Typography>
				</Box>
			</Paper>
		</Box>
	)
}
