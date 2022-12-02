import {createContext, useReducer} from "react"
import users from "./users.json"

export const AllData = createContext()

if (window.localStorage.getItem("manage") === null) {
	window.localStorage.setItem(
		"manage",
		JSON.stringify({sesion: {}, events: [], users: [...users]})
	)
}

export default function DataProvider({children}) {
	const initUserData = JSON.parse(window.localStorage.getItem("manage"))

	const userManagement = (state, action) => {
		switch (action.do) {
			case "ADD": {
				const {payload} = action
				const {name, password, cc, email, type} = payload
				if (type === "Seller") {
					let newState = {
						...state,
						users: [
							...state.users,
							{name, password, cc, email, type, events: []},
						],
					}
					window.localStorage.setItem("manage", JSON.stringify(newState))
					return newState
				} else {
					let newState = {
						...state,
						users: [...state.users, {name, password, cc, email, type}],
					}
					window.localStorage.setItem("manage", JSON.stringify(newState))
					return newState
				}
			}
			case "SESION": {
				const newState = {...state, sesion: {...action.payload.usuario}}
				window.localStorage.setItem("manage", JSON.stringify(newState))
				return newState
			}
			case "CLOSE_SESION": {
				const newState = {...state, sesion: {}}
				window.localStorage.setItem("manage", JSON.stringify(newState))
				return newState
			}
			default:
				return state
		}
	}

	const [userList, UpdateList] = useReducer(userManagement, initUserData)

	const verify = (email, password) => {
		return [...userList.users].some(
			(x) => x.email === email && x.password === password
		)
	}

	return (
		<AllData.Provider value={{userList, UpdateList, verify}}>
			{children}
		</AllData.Provider>
	)
}
