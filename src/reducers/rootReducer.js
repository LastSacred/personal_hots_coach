function rootReducer(
  state = {
    loggedIn: localStorage.username
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
