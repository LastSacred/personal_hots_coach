function allHeroesReducer(
  state = [],
  action
) {
  switch (action.type) {
    case 'UPDATE_HEROES':
      return action.heroes

    default:
      return state
  }
}

export default allHeroesReducer
