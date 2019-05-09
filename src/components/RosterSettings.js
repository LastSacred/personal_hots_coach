import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

import { postDraft, postMatches } from '../services/api.js'
import PickList from './PickList'
import AddRemoveHeroes from './AddRemoveHeroes'
import SettingToggle from './SettingToggle'

class RosterSettings extends Component {
  draft = () => {
    return {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    }
  }

  componentDidMount() {
    postMatches()
    postDraft(this.draft()).then(draft => this.props.updatePickList(draft.pick_list))
  }

  render() {
    return(
      <Segment color="violet">
        <h2>Roster</h2>
        <div>
          <SettingToggle setting={{label: 'Auto Select Roster Heroes', name: 'auto_roster'}} />
          {this.props.autoRoster ? null : <AddRemoveHeroes />}
        </div>
        <PickList />
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    pickList: state.pickList,
    autoRoster: state.settings.auto_roster
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePickList: (pickList) => dispatch({ type: 'UPDATE_PICKLIST', pickList: pickList })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterSettings)
