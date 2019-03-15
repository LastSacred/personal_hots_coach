import { createStore } from 'redux'

function rootReducer(
  state = {
    loggedIn: localStorage.username || null,
    page: '',
    filterValue: '',
    allMaps: [],
    allHeroes: [],
    draft: {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    },
    pickList: [],
    selectedHero: null
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

    case "UPDATE_FILTER_VALUE":
      return { ...state, filterValue: action.value }

    case "UPDATE_MAPS":
      return { ...state, allMaps: action.maps }

    case "UPDATE_HEROES":
      const heroes = action.heroes.filter(hero => {
        const banNames = state.draft.bans.map(hero => hero.name)
        const with_heroNames = state.draft.with_heroes.map(hero => hero.name)
        const against_heroNames = state.draft.against_heroes.map(hero => hero.name)
        return !banNames.concat(with_heroNames).concat(against_heroNames).includes(hero.name)
      })
      return { ...state, allHeroes: heroes }

    case "UPDATE_DRAFT_MAP":
      return { ...state, draft: { ...state.draft, map: action.map } }

    case "UPDATE_PICKLIST":
      const pickList = action.pickList.filter(heroObj => {
        const banNames = state.draft.bans.map(hero => hero.name)
        const with_heroNames = state.draft.with_heroes.map(hero => hero.name)
        const against_heroNames = state.draft.against_heroes.map(hero => hero.name)
        return !banNames.concat(with_heroNames).concat(against_heroNames).includes(heroObj.hero.name)
      })
      return { ...state, pickList: pickList }

    case "SELECT_HERO":
      return { ...state, selectedHero: action.heroName }

    case "ADD_TO_BANS":
      if (state.draft.bans.length >= 6) return state
      return { ...state, draft: { ...state.draft, bans: [...state.draft.bans, action.heroName] } }

    case "ADD_TO_WITH_HEROES":
      if (state.draft.with_heroes.length >= 5) return state
      return { ...state, draft: { ...state.draft, with_heroes: [...state.draft.with_heroes, action.heroName] } }

    case "ADD_TO_AGAINST_HEROES":
      if (state.draft.against_heroes.length >= 5) return state
      return { ...state, draft: { ...state.draft, against_heroes: [...state.draft.against_heroes, action.heroName] } }

    case "DESELECT_BAN":
      return { ...state, draft: { ...state.draft, bans: state.draft.bans.filter(hero => hero.name !== action.heroName) } }

    case "DESELECT_WITH_HERO":
      return { ...state, draft: { ...state.draft, with_heroes: state.draft.with_heroes.filter(hero => hero.name !== action.heroName) } }

    case "DESELECT_AGAINST_HERO":
      return { ...state, draft: { ...state.draft, against_heroes: state.draft.against_heroes.filter(hero => hero.name !== action.heroName) } }

    default:
      return state
  }
}

export default createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
