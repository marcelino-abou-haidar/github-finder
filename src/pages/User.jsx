import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

const User = ({ match }) => {
	const { getUser, user } = useContext(GithubContext)
	const params = useParams()

	useEffect(() => {
		getUser(params.login)
	}, [])

	return <div>{user.name}</div>
}

export default User
