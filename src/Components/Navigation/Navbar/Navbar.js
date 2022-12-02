import React, {useContext} from "react"
import {Link as RouterLink} from "react-router-dom"
import {Box, Button, Link, Typography} from "@mui/material"
import styles from "./Navbar.css"
import {AllData} from "../../Context/ContextProvider"
import {useNavigate} from "react-router-dom"

const actualStyle = {
	item: {
		padding: "1.5rem 1rem 0 1rem",
		"&:hover": {backgroundPosition: "100% 100%"},
	},
	backgroundWithBeforeEffect: {
		background: "linear-gradient(#FFFFFF, #FFFFFF 50%, #0874cc 50%, #0874cc)",
		backgroundSize: "100% 200%",

		transition: "background .5s",
		paddingBottom: "3rem",
		borderRadius: ".25rem .25rem 0 0",
	},
	ticketPunch: {borderRight: ".15rem dashed #0874cc", marginRight: "1rem"},
	links: {
		color: "#000000",
		textDecoration: "none",
	},
	title: {
		flexGrow: 1,
		fontFamily: "logofuente",
		marginTop: "1rem",
	},
}

export default function Navbar() {
	const navigate = useNavigate()
	const {userList, UpdateList} = useContext(AllData)

	return (
		<>
			<Box sx={actualStyle.ticketPunch}></Box>
			<Typography variant="h3" sx={actualStyle.title}>
				<Link component={RouterLink} to={"/"} sx={actualStyle.links}>
					Tuboleto
				</Link>
			</Typography>

			{userList.sesion?.email === undefined && (
				<>
					<Box
						sx={{
							...actualStyle.item,
							...actualStyle.backgroundWithBeforeEffect,
						}}
					>
						<Link
							variant="body1"
							component={RouterLink}
							to={"/login"}
							sx={actualStyle.links}
						>
							Ingresa
						</Link>
					</Box>
					<Box
						sx={{
							...actualStyle.item,
							...actualStyle.backgroundWithBeforeEffect,
						}}
					>
						<Link
							variant="body1"
							component={RouterLink}
							to={"/register"}
							sx={actualStyle.links}
						>
							Registrate
						</Link>
					</Box>
				</>
			)}
			{userList.sesion?.email !== undefined && (
				<Box display={"flex"} alignItems={"baseline"}>
					<Box sx={{position: "relative", width: "17rem"}}>
						<Typography
							position={"absolute"}
							variant="h5"
							color="gray"
							marginRight={".25rem"}
							sx={{bottom: "-.8rem"}}
						>
							Hola, {userList.sesion.name.split(" ")[0].toUpperCase()}
						</Typography>
					</Box>
					<Box
						sx={{
							...actualStyle.item,
							...actualStyle.backgroundWithBeforeEffect,
						}}
					>
						<Button
							disableRipple
							variant="body1"
							component={RouterLink}
							to={"/user"}
							sx={actualStyle.links}
						>
							Mi cuenta
						</Button>
					</Box>
					<Box
						sx={{
							...actualStyle.item,
							...actualStyle.backgroundWithBeforeEffect,
						}}
					>
						<Button
							variant="body1"
							to={"/register"}
							disableRipple
							sx={actualStyle.links}
							onClick={() => {
								console.log("Click")
								UpdateList({do: "CLOSE_SESION"})
								navigate("/")
							}}
						>
							Cerrar Sesion
						</Button>
					</Box>
				</Box>
			)}
		</>
	)
}
