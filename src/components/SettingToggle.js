import React from 'react'
import { connect } from 'react-redux'
import { Radio } from 'semantic-ui-react'

import { postDraft, updateUser } from '../services/api.js'

const SettingToggle = (props) => {
  const draft = () => {
    return {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    }
  }

  const handleClick = (event) => {
    props.updatePickList([])

    updateUser({[props.setting.name]: !props.settings[props.setting.name]}).then(() => {
      postDraft(draft()).then(draft => props.updatePickList(draft.pick_list))
    })

    props.toggleSetting(props.setting.name)
  }

  return (
    <div style={{margin:'15px 0px'}}>
      <Radio
        toggle
        label={props.setting.label}
        checked={props.settings[props.setting.name]}
        onClick={handleClick}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePickList: (pickList) => dispatch({ type: 'UPDATE_PICKLIST', pickList: pickList }),
    toggleSetting: (setting) => dispatch({ type: 'TOGGLE_SETTING', setting: setting })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingToggle)
