import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Radio } from 'semantic-ui-react'

import { getUser, postDraft, postMatches, updateUser } from '../services/api.js'
import PickList from './PickList'

class Settings extends Component {
  state = {
    battletag: null,
    auto_roster: false
  }

  componentDidMount() {
    const draft = {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    }

    postMatches()

    getUser().then(user => {
      this.setState(user)
    })

    postDraft(draft).then(draft => this.props.updatePickList(draft.pick_list))
  }

  handleAutoRosterClick() {
    // updateUser({auto_roster: !this.state.auto_roster}).then()
  }

  render() {
    return(
      <Container textAlign='left'>
        {this.props.loggedIn ? null : <Redirect to="/Login" />}
        <h1>{this.props.loggedIn}</h1>
        <h2>Battletag</h2>
        <div>{this.state.battletag}</div>
        <h2>Roster</h2>
        <Radio
          toggle
          label="Auto"
          checked={this.state.auto_roster}
          onClick={this.handleAutoRosterClick}
        />
        <PickList />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
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
)(Settings)
