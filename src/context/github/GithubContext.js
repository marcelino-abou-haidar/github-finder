import { createContext, useReducer } from 'react'
import githubReducer from './githubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
	const initialeState = {
		users: [],
		user: {},
		respos: [],
		loading: false,
	}

	const [state, dispatch] = useReducer(githubReducer, initialeState)

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
