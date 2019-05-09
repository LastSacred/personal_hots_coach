function draftReducer(
  state = {
    map: '',
    bans: [],
    with_heroes: [],
    against_heroes: []
  },
  action
) {
  switch (action.type) {
    case 'UPDATE_DRAFT_MAP':
      return { ...state, map: action.map }

    case 'ADD_TO_BANS':
      if (state.bans.length >= 6) return state
      return { ...state, bans: [...state.bans, action.heroName] }

    case 'DESELECT_BAN':
      return { ...state, bans: state.bans.filter(hero => hero.name !== action.heroName) }

    case 'ADD_TO_WITH_HEROES':
      if (state.with_heroes.length >= 5) return state
      return { ...state, with_heroes: [...state.with_heroes, action.heroName] }

    case 'DESELECT_WITH_HERO':
      return { ...state, with_heroes: state.with_heroes.filter(hero => hero.name !== action.heroName) }

    case 'ADD_TO_AGAINST_HEROES':
      if (state.against_heroes.length >= 5) return state
      return { ...state, against_heroes: [...state.against_heroes, action.heroName] }

    case 'DESELECT_AGAINST_HERO':
      return { ...state, against_heroes: state.against_heroes.filter(hero => hero.name !== action.heroName) }

    default:
      return state
  }
}

export default draftReducer
