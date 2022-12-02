import React from "react"
import Events from "../../Components/Events"
import {useContext} from "react"
import {AllData} from "../../Components/Context/ContextProvider"
import styles from "./Home.module.css"
import Footer from "../../Components/Footer/Footer"
import {Box} from "@mui/system"
export default function Home() {
	console.log(styles.holaa)
	const {userList} = useContext(AllData)
	console.log(userList, "esta es la lista")

	return (
		<>
			<Box marginBottom={"1rem"}>
				<Events />
			</Box>
			<Footer />
		</>
	)
}
