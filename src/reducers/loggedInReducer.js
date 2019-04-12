function loggedInReducer(
  state = localStorage.username || null,
  action
) {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      return localStorage.username

    default:
      return state
  }
}

export default loggedInReducer
