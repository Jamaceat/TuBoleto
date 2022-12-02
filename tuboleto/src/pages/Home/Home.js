import React from "react";
import Header from "../../Components/Header";
import Events from "../../Components/Events";
import Footer from "../../Components/Footer";
import {useContext} from "react"
import {AllData} from "../../Components/Context/ContextProvider"
import styles from "./Home.module.css"

export default function Home() {
    console.log(styles.holaa)
	const {userList} = useContext(AllData)
	console.log(userList, "esta es la lista")

    return (
        <>
            <Header />

            <Events />

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

            <Footer />
        </>
    )
}