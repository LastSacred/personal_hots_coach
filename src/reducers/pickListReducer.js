function pickListReducer(
  state = [],
  action
) {
  switch (action.type) {
    case 'UPDATE_PICKLIST':
      return action.pickList

    default:
      return state
  }
}

export default pickListReducer
