import { createContext, useReducer } from 'react'
import githubReducer from './githubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
	const initialeState = {
		users: [],
		loading: true,
	}

	const [state, dispatch] = useReducer(githubReducer, initialeState)

	const fetchUsers = async () => {
		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		})

		const data = await response.json()
		dispatch({
			type: 'GET_USERS',
			payload: data,
			loading: false,
		})
	}

	return (
		<GithubContext.Provider
			value={{ users: state.users, loading: state.loading, fetchUsers }}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext
