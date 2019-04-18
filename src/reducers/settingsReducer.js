function settingsReducer(
  state = {
    battletag: null,
    auto_roster: false,
    heroes: [],
  },
  action
) {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return action.user

    case 'TOGGLE_AUTO_ROSTER':
      return { ...state, auto_roster: !state.auto_roster }

    case 'UPDATE_SETTINGS_HEROES':
      return { ...state, heroes: action.heroes }

    default:
      return state
  }
}

export default settingsReducer
