function statSetReducer(
  state = {
    hero_sets: []
  },
  action
) {
  switch (action.type) {
    case 'UPDATE_STATSET':
      return action.statSet

    default:
      return state
  }
}

export default statSetReducer
