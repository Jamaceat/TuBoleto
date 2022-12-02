import {createContext, useReducer} from "react"
import users from "./users.json"

export const AllData = createContext()

if (window.localStorage.getItem("users") === null) {
	window.localStorage.setItem("users", JSON.stringify(users))
}

export default function DataProvider({children}) {
	const initUserData = JSON.parse(window.localStorage.getItem("users"))

	const userManagement = (state, action) => {
		switch (action.do) {
			case "ADD": {
				const {payload} = action
				const {name, password, cc, email, type} = payload
				if (type === "Seller") {
					let newState = [
						...state,
						{name, password, cc, email, type, events: []},
					]
					window.localStorage.setItem("users", JSON.stringify(newState))
					return newState
				} else {
					let newState = [...state, {name, password, cc, email, type}]
					window.localStorage.setItem("users", JSON.stringify(newState))
					return newState
				}
			}
			default:
				return state
		}
	}

	const [userList, UpdateList] = useReducer(userManagement, initUserData)

	return (
		<AllData.Provider value={{userList, UpdateList}}>
			{children}
		</AllData.Provider>
	)
}
