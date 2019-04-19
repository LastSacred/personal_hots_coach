import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Radio, Segment } from 'semantic-ui-react'

import { postDraft, postMatches, updateUser } from '../services/api.js'
import PickList from './PickList'
import AddRemoveHeroes from './AddRemoveHeroes'

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

  handleAutoRosterClick = (event) => {
    this.props.updatePickList([])

    updateUser({auto_roster: !this.props.autoRoster}).then(() => {
      postDraft(this.draft()).then(draft => this.props.updatePickList(draft.pick_list))
    })

    this.props.toggleAutoRoster()
  }

  render() {
    return(
      <Segment color="violet">
        <h2>Roster</h2>
        <div>
          <Radio
            toggle
            label="Auto Select Roster Heroes"
            checked={this.props.autoRoster}
            onClick={this.handleAutoRosterClick}
          />
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
    updatePickList: (pickList) => dispatch({ type: 'UPDATE_PICKLIST', pickList: pickList }),
    toggleAutoRoster: () => dispatch({ type: 'TOGGLE_AUTO_ROSTER' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterSettings)
