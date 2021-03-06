import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import { get } from '../services/api.js'
import RosterSettings from './RosterSettings'
import TrackedMatchesSettings from './TrackedMatchesSettings'

class Settings extends Component {
  componentDidMount() {
    get('users', 'token').then(this.props.updateSettings)
  }

  render() {
    return(
      <Container textAlign='left'>
        {this.props.loggedIn ? null : <Redirect to="/Login" />}
        <h1>{this.props.loggedIn}</h1>
        <div style={{margin: '50px 20px 50px 20px'}}>
          <h2>Battletag</h2>
          <div>{this.props.battletag}</div>
        </div>
        <div style={{margin: '50px 20px 50px 20px'}}>
          <TrackedMatchesSettings />
        </div>
        <div style={{margin: '50px 20px 50px 20px'}}>
          <RosterSettings />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    battletag: state.settings.battletag
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: (user) => dispatch({ type: 'UPDATE_SETTINGS', user: user })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
