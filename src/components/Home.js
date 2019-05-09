import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Grid, Segment } from 'semantic-ui-react'

const Home = (props) => {
  const showNextSteps = () => {
    if (props.loggedIn) {
      return (
        <Grid.Row columns={2}>
          <Grid.Column>
            <Link to='/upload'>
              <Segment style={{maxWidth: '350px', marginLeft: 'auto'}}>
                <h3 style={{lineHeight: '100px'}}>Upload replay files</h3>
              </Segment>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to='/draft'>
              <Segment style={{maxWidth: '350px'}}>
                <h3 style={{lineHeight: '100px'}}>Start a draft</h3>
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>
      )
    } else {
      return (
        <Grid.Row column={1}>
          <Grid.Column>
            <Segment style={{maxWidth: '350px', margin: 'auto'}}>
              <Link to='/login'>
                <h3 style={{lineHeight: '100px'}}>Log in to start</h3>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      )
    }
  }

  return(
    <Container>
      <h1 style={{fontSize: '2.5em'}}>Welcome to Personal HotS Coach</h1>
      <p>
        The Heroes of the Storm companion that uses your historical match data to make draft pick suggestions.
      </p>
      <Grid style={{marginTop: '100px'}}>
      {showNextSteps()}
      </Grid>
      <h2>
        Note: this is a demo version. Performance quality is not guaranteed. If you would like to clone your own verson of the app you can get it from <a href="https://github.com/LastSacred/personal_hots_coach">Github</a>
      </h2>
      <p style={{width: '300px', position: 'absolute', bottom: '50px', left: '50%', marginLeft: '-150px'}}>
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
