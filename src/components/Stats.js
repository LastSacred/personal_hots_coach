import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HeroSetsContainer from './HeroSetsContainer'

const Stats = (props) => {
  return(
    <Container>
      {props.loggedIn ? null : <Redirect to="/login" />}
      <h1>Stats</h1>
      <HeroSetsContainer />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLogin: () => dispatch({ type: 'UPDATE_LOGIN'})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)
