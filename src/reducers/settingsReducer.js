function settingsReducer(
  state = {
    battletag: null,
    auto_roster: false,
    heroes: [],
    track_quick_match: false,
    track_unranked_draft: false,
    track_ranked_draft: false
  },
  action
) {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return action.user

    case 'TOGGLE_SETTING':
      return { ...state, [action.setting]: !state[action.setting] }

    case 'UPDATE_SETTINGS_HEROES':
      return { ...state, heroes: action.heroes }

    default:
      return state
  }
}

export default settingsReducer
