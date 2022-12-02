import {Paper, Typography, Divider, Stack, Button, Link} from "@mui/material"
import {Box} from "@mui/system"
import React, {useContext} from "react"
import {AllData} from "../../Components/Context/ContextProvider"
import "./ManageAccount.css"
import {Link as RouterLink} from "react-router-dom"

export default function AccountManager() {
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
				<Typography
					variant="h3"
					sx={{
						textAlign: "center",
						fontFamily: "infoFuente",
						paddingTop: "1rem",
					}}
				>
					Mi cuenta
					<Divider />
					<Stack fontSize={"1rem"}>
						<Box>
							<Paper
								sx={{
									borderRadius: "1rem",
									backgroundColor: "white",
									width: "fit-content",
									margin: "0 auto -1rem auto",
									padding: "1rem",
									marginTop: "1rem",
								}}
								elevation={12}
							>
								Nombre{" "}
							</Paper>
							<Box padding={"1rem"} sx={{backgroundColor: "whitesmoke"}}>
								<span style={{}}>{userList.sesion.name.toUpperCase()}</span>
							</Box>
						</Box>
						<Box>
							<Paper
								sx={{
									borderRadius: "1rem",
									backgroundColor: "white",
									width: "fit-content",
									margin: "0 auto -1rem auto",
									padding: "1rem",
									marginTop: "1rem",
								}}
								elevation={12}
							>
								Email{" "}
							</Paper>
							<Box padding={"1rem"} sx={{backgroundColor: "whitesmoke"}}>
								<span style={{}}>{userList.sesion.email}</span>
							</Box>
						</Box>
						<Box>
							<Paper
								sx={{
									borderRadius: "1rem",
									backgroundColor: "white",
									width: "fit-content",
									margin: "0 auto -1rem auto",
									padding: "1rem",
									marginTop: "1rem",
								}}
								elevation={12}
							>
								C.C.{" "}
							</Paper>
							<Box padding={"1rem"} sx={{backgroundColor: "whitesmoke"}}>
								<span style={{}}>{userList.sesion.cc}</span>
							</Box>
						</Box>
						<Box>
							<Paper
								sx={{
									borderRadius: "1rem",
									backgroundColor: "white",
									width: "fit-content",
									margin: "0 auto -1rem auto",
									padding: "1rem",
									marginTop: "1rem",
								}}
								elevation={12}
							>
								Tipo de cuenta{" "}
							</Paper>
							<Box padding={"1rem"} sx={{backgroundColor: "whitesmoke"}}>
								<span style={{}}>
									{userList.sesion.type === "Seller" ? "Vendedor" : "Comprador"}
								</span>
							</Box>
						</Box>
					</Stack>
				</Typography>
			</Paper>
			{userList.sesion.type === "Seller" && (
				<Paper
					sx={{
						gridArea: "crud",
						display: "flex",
						marginBottom: "1rem",
						justifyContent: "center",
					}}
				>
					<Button
						variant="contained"
						component={RouterLink}
						to={"/user/evt_manager"}
						sx={{
							backgroundColor: "black",
							"&:hover": {backgroundColor: "#5AB865"},
							marginBottom: "1rem",
						}}
					>
						Mis eventos
					</Button>
				</Paper>
			)}
		</Box>
	)
}
