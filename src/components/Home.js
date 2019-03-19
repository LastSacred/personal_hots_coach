import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const Home = (props) => {
  const showNextSteps = () => {
    if (props.loggedIn) {
      return (
        <div>
          <Link to='/upload'>
            <h3 style={{lineHeight: 10}}>Upload replay files to give Personal HotS Coach historical data</h3>
          </Link>
          <Link to='/draft'>
            <h3 style={{lineHeight: 1}}>Start a draft</h3>
          </Link>
        </div>
      )
    } else {
      return (
        <Link to='/login'>
          <h3>Log in to start</h3>
        </Link>
      )
    }
  }

  return(
    <Container>
      <h1>Welcome to Personal HotS Coach</h1>
      <p>
        The Heroes of the Storm companion that uses your historical match data to make draft pick suggestions.
      </p>
      {showNextSteps()}
      <p style={{lineHeight: 50}}>
        Personal HotS Coach uses <a href="http://hotsapi.net">HotsApi</a>
      </p>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Home)
