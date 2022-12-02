import {
	Box,
	FormControl,
	InputLabel,
	Input,
	Button,
	Alert,
	AlertTitle,
	Select,
	MenuItem,
} from "@mui/material"
import React, {useRef, useState, useContext} from "react"
import {AllData} from "../../Components/Context/ContextProvider"

export default function Register() {
	const {UpdateList} = useContext(AllData)
	const formulario = useRef()
	const inscribirse = () => {
		const valores = [...formulario?.current.querySelectorAll("input")].map(
			(x) => x.value
		)
		const formateo = {
			name: valores[0],
			password: valores[1],
			cc: valores[2],
			email: valores[3],
			type: valores[4],
		}
		UpdateList({do: "ADD", payload: {...formateo}})

		console.log(formateo)
	}

	const deleteFields = () => {
		const valores = [...formulario?.current.querySelectorAll("input")].forEach(
			(x) => {
				x.value = ""
			}
		)
	}

	const verify = () => {
		const valores = [...formulario?.current.querySelectorAll("input")].map(
			(x) => x.value
		)

		setCorrecto(!valores.some((x) => x === ""))
		const indexes = valores
			.map((x, i) => (x === "" ? i : -1))
			.filter((x) => x !== -1)

		const fields = [...formulario?.current.querySelectorAll("label")].map(
			(x) => x.textContent
		)
		const badFields = indexes.map((x) => fields[x])
		setBadFields(badFields)
		setTimeout(() => {
			setCorrecto(true)
		}, 3000)
		return indexes.length !== 0
	}

	const [correcto, setCorrecto] = useState(true)
	const [registrado, setRegistrado] = useState(false)
	const [badFields, setBadFields] = useState([])
	return (
		<Box
			sx={{
				marginX: "25%",
				marginY: "2rem",
				borderRadius: "1rem",
				border: "0.1rem solid #49D9FF",
				padding: "1rem",
			}}
			component="form"
			ref={formulario}
		>
			<FormControl fullWidth sx={{marginBottom: "1rem"}}>
				<InputLabel>Nombre Completo</InputLabel>
				<Input placeholder="Juan" required />
			</FormControl>

			<FormControl fullWidth sx={{marginBottom: "1rem"}}>
				<InputLabel>Contraseña</InputLabel>
				<Input placeholder="Password123" required />
			</FormControl>
			<FormControl fullWidth sx={{marginBottom: "1rem"}}>
				<InputLabel>Cedula Ciudadania</InputLabel>
				<Input
					type="number"
					min="0"
					max="10000000000"
					placeholder="1005568880"
					required
				/>
			</FormControl>
			<FormControl fullWidth sx={{marginBottom: "1rem"}}>
				<InputLabel>Email</InputLabel>
				<Input placeholder="Johanitox@gmail.com" type="email" required />
			</FormControl>
			<FormControl sx={{width: "13rem"}}>
				<InputLabel>Tipo de usuario</InputLabel>
				<Select
					defaultValue={"Buyer"}
					onChange={(event) => {
						// (event.target.value)
					}}
					label="tipo de usuario"
				>
					<MenuItem value={"Seller"}>Vendedor</MenuItem>
					<MenuItem value={"Buyer"}>Comprador</MenuItem>
				</Select>
			</FormControl>
			{!correcto && (
				<Alert severity="error">
					<AlertTitle>
						<strong>error</strong>
					</AlertTitle>{" "}
					Necesita diligenciar los campos:{" "}
					{badFields.map((x, i, a) =>
						i !== a.length - 1 ? (
							<>
								<span>{x}, </span>
							</>
						) : (
							<>
								<span>{x}</span>
							</>
						)
					)}
				</Alert>
			)}
			{registrado && (
				<Alert>
					<AlertTitle>
						<strong> exito</strong>
					</AlertTitle>
					Registrado exitosamente
				</Alert>
			)}
			<Button
				onClick={() => {
					console.log("Corriendo")
					if (!verify()) {
						setRegistrado(true)
						inscribirse()
						deleteFields()
						setTimeout(() => {
							setRegistrado(false)
						}, 3000)
					}
				}}
				variant="contained"
				fullWidth
				sx={{marginTop: "1rem"}}
			>
				Enviar
			</Button>
		</Box>
	)
}
