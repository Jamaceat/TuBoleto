import {createContext, useReducer} from "react"
import users from "./users.json"

export const AllData = createContext()

export default function DataProvider({children}) {
	const initUserData = users

	const userManagement = (state, action) => {
		switch (action.do) {
			case "ADD": {
				const {payload} = action
				const {user, password, type} = payload
				let newState = [...state, {user, password, type}]
				return newState
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
