function filterValueReducer(
  state = '',
  action
) {
  switch (action.type) {
    case 'UPDATE_FILTER_VALUE':
      return action.value

    default:
      return state
  }
}

export default filterValueReducer
