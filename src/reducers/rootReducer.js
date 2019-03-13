function rootReducer(
  state = {
    loggedIn: localStorage.username || null
  },
  action
) {
  switch (action.type) {
    case "expression":
      return
    default:

  }
}

export default rootReducer
