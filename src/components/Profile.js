import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Button } from 'semantic-ui-react'

const Profile = (props) => {
  const logOut = (event) => {
    localStorage.clear()
    props.updateLogin()
  }

  return(
    <Container>
      {props.loggedIn ? null : <Redirect to="/Login" />}
      <h1>Profile</h1>
      <Button onClick={logOut}>Log Out</Button>
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
)(Profile)
