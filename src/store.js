import { createStore } from 'redux'

function rootReducer(
  state = {
    loggedIn: localStorage.username || null,
    page: '',
    allMaps: [],
    allHeroes: [],
    draft: {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    },
    pickList: []
  },
  action
) {
  switch (action.type) {
    case "UPDATE_LOGIN":
      return { ...state, loggedIn: localStorage.username }
    case "UPDATE_PAGE":
      let path = window.location.href
      path = path.split('/')
      const newPage = path[path.length - 1]
      return { ...state, page: newPage }
    case "UPDATE_MAPS":
      return { ...state, allMaps: action.maps }
    case "UPDATE_HEROES":
      return { ...state, allHeroes: action.heroes }
    case "UPDATE_DRAFT":
      return state
    case "UPDATE_PICKLIST":
      return { ...state, pickList: action.pickList }
    default:
      return state
  }
}

export default createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
