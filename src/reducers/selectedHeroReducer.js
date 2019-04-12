function selectedHeroReducer(
  state = null,
  action
) {
  switch (action.type) {
    case 'SELECT_HERO':
      return action.heroName

    default:
      return state
  }
}

export default selectedHeroReducer
