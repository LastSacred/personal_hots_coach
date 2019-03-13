import { createStore } from 'redux'


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
      return state
  }
}

export default createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
