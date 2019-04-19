import React from 'react'
import { connect } from 'react-redux'
import { Radio } from 'semantic-ui-react'

import { postDraft, updateUser } from '../services/api.js'

const AutoRosterToggle = (props) => {
  const draft = () => {
    return {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    }
  }

  const handleAutoRosterClick = (event) => {
    props.updatePickList([])

    updateUser({auto_roster: !props.autoRoster}).then(() => {
      postDraft(draft()).then(draft => props.updatePickList(draft.pick_list))
    })

    props.toggleAutoRoster()
  }

  return (
    <Radio
      toggle
      label="Auto Select Roster Heroes"
      checked={props.autoRoster}
      onClick={handleAutoRosterClick}
    />
  )
}

const mapStateToProps = state => {
  return {
    autoRoster: state.settings.auto_roster
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePickList: (pickList) => dispatch({ type: 'UPDATE_PICKLIST', pickList: pickList }),
    toggleAutoRoster: () => dispatch({ type: 'TOGGLE_AUTO_ROSTER' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoRosterToggle)
