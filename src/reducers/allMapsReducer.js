function allMapsReducer(
  state = [],
  action
) {
  switch (action.type) {
    case 'UPDATE_MAPS':
      return action.maps

    default:
      return state
  }
}

export default allMapsReducer
