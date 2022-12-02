import React from "react"
import {
	Box,
	FormControl,
	InputLabel,
	Input,
	Button,
	Alert,
	AlertTitle,
	Collapse,
} from "@mui/material"
import {useContext, useRef, useState} from "react"
import {AllData} from "../../Components/Context/ContextProvider"
import {useNavigate} from "react-router-dom"
export default function Login() {
	const Navigate = useNavigate()
	const {verify} = useContext(AllData)
	const campos = useRef()
	const [correcto, setCorrecto] = useState(false)

	const deleteFields = () => {
		const valores = [...campos?.current.querySelectorAll("input")].forEach(
			(x) => {
				x.value = ""
			}
		)
		setCorrecto(true)
	}

	const getCampos = () => {
		const valores = [...campos?.current.querySelectorAll("input")].map(
			(x) => x.value
		)
		const [email, password] = valores
		const dentro = verify(email, password)
		dentro ? Navigate("/") : deleteFields()
		setTimeout(() => {
			setCorrecto(false)
		}, 3000)
	}

	return (
		<Box
			sx={{
				marginX: "25%",
				marginY: "10%",
				borderRadius: "1rem",
				border: "0.1rem solid #49D9FF",
				padding: "1rem",
			}}
			component="form"
			ref={campos}
		>
			<FormControl fullWidth sx={{marginBottom: "1rem"}}>
				<InputLabel>Email</InputLabel>
				<Input required />
			</FormControl>

			<FormControl fullWidth sx={{marginBottom: "1rem"}}>
				<InputLabel>Contraseña</InputLabel>
				<Input type="password" required />
			</FormControl>

			<Collapse in={correcto}>
				<Alert severity="error" sx={{marginY: "1rem"}}>
					{" "}
					<AlertTitle>
						<strong>error</strong>
					</AlertTitle>{" "}
					Usuario o contraseña incorrectos
				</Alert>
			</Collapse>

			<Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
				<Button
					variant="contained"
					onClick={() => {
						getCampos()
					}}
				>
					Login
				</Button>
			</Box>
		</Box>
	)
}
