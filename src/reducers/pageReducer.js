function pageReducer(
  state = '',
  action
) {
  switch (action.type) {
    case 'UPDATE_PAGE':
      let path = window.location.href
      path = path.split('/')
      const newPage = path[path.length - 1]
      return newPage

    default:
      return state
  }
}

export default pageReducer
