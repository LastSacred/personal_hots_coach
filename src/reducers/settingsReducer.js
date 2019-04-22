function settingsReducer(
  state = {
    battletag: null,
    auto_roster: false,
    heroes: [],
    track_quick_match: false,
    track_unranked_match: false,
    track_ranked_match: false
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
