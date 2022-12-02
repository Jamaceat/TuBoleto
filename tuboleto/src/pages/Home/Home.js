import React from "react"
import Events from "../../Components/Events"
import {useContext} from "react"
import {AllData} from "../../Components/Context/ContextProvider"
import styles from "./Home.module.css"

export default function Home() {
	console.log(styles.holaa)
	const {userList} = useContext(AllData)
	console.log(userList, "esta es la lista")

	return (
		<>
			<Events />

			<div>
				{userList !== undefined &&
					userList.map((x, i) => {
						return (
							<div className={styles.contenedorPrueba} key={i}>
								<p>name: {x.name}</p>
								<p>password: {x.password}</p>
								<p>tipo: {x.type}</p>
							</div>
						)
					})}
			</div>
		</>
	)
}
