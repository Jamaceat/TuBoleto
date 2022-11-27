import styles from "./App.module.css"
import Header from "./Components/Header/Header"
import {useContext} from "react"
import {AllData} from "./Components/Context/ContextProvider"

function App() {
	console.log(styles.holaa)
	const {userList} = useContext(AllData)
	console.log(userList, "esta es la lista")
	return (
		<>
			<Header />

			<div>
				{userList !== undefined &&
					userList.map((x, i) => {
						return (
							<div className={styles.contenedorPrueba} key={i}>
								<p>user: {x.user}</p>
								<p>password: {x.password}</p>
								<p>tipo: {x.type}</p>
							</div>
						)
					})}
			</div>
		</>
	)
}

export default App
