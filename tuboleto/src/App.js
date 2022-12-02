import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import EventManager from "./pages/EventManager"
import ManageAccount from "./Components/ManageAccount/"
import Crud from "./Components/CRUD"

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/evt_manager" element={<EventManager />} />
				<Route path="/user" element={<ManageAccount />} />
				<Route path="/user/crud" element={<Crud />} />
			</Routes>
		</Router>
	)
}

export default App
