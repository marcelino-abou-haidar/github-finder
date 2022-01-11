import { createContext, useReducer } from 'react'
import githubReducer from './githubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
	const initialeState = {
		users: [],
		loading: false,
	}

	const [state, dispatch] = useReducer(githubReducer, initialeState)

	// Get initial users for testing purposes
	/* 	const fetchUsers = async () => {
		setLoading()
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
	} */

	// Search for a specific user
	const searchUsers = async (text) => {
		setLoading()
		const params = new URLSearchParams({
			q: text,
		})

		const response = await fetch(
			`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
			{
				headers: {
					Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
				},
			}
		)
		const { items } = await response.json()

		dispatch({
			type: 'GET_USERS',
			payload: items,
		})
	}

	const setLoading = () => dispatch({ type: 'SET_LOADING' })

	return (
		<GithubContext.Provider
			value={{ users: state.users, loading: state.loading, searchUsers }}
		>
			{children}
		</GithubContext.Provider>
	)
}

export default GithubContext