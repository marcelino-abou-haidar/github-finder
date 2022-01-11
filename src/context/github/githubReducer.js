const githubReducer = (state, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: action.loading,
			}
		case 'SET_LOADING':
			return {
				...state,
				loading: true,
			}
		default:
			return state
	}
}

export default githubReducer
