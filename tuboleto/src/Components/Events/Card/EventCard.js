import React from "react"
import {Box} from "@mui/system"
import {Paper, Typography, Divider, Button} from "@mui/material"
import "./EventCard.module.css"

export default function EventCard() {
	return (
		<Paper
			sx={{overflow: "hidden", margin: ".5rem .75rem", borderRadius: "1.25rem"}}
		>
			<Box>
				<img
					style={{width: "100%"}}
					src="https://tuboleta.com/imagenes/635c3f6aebb19.jpg"
					alt="PORTADA"
				></img>
				<Box sx={{padding: "1rem"}}>
					<Typography
						variant="h3"
						sx={{fontSize: "1rem", fontWeight: "bold", marginBottom: "1rem"}}
					>
						Ancestros del futuro
					</Typography>
					<Divider />
					<Box
						sx={{
							marginTop: "1rem",
							display: "grid",
							gridTemplateColumns: "1fr 2fr",
						}}
					>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "1fr",
								justifyItems: "center",
							}}
						>
							<Typography
								sx={{fontFamily: "OpenSansBold", marginBottom: "-1rem"}}
							>
								MAR
							</Typography>
							<Typography
								sx={{
									fontFamily: "OpenSansBold",
									color: "#0874cc",
									fontSize: "2rem",
									marginBottom: "-.75rem",
								}}
							>
								29
							</Typography>
							<Typography
								sx={{fontFamily: "OpenSansBold", textAlign: "center"}}
							>
								NOV 2022
							</Typography>
						</Box>
						<Box
							sx={{
								display: "grid",
								gridTemplateRows: "1fr 1fr",
							}}
						>
							<Typography
								variant="body1"
								sx={{
									textOverflow: "ellipsis",
									overflow: "hidden",
									color: "#666666",
								}}
							>
								Teatro Metropolitano
							</Typography>
							<Button variant="contained" sx={{fontSize: ".7rem"}}>
								Comprar boleto
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Paper>
	)
}
