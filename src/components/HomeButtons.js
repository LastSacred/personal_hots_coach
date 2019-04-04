import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'

const HomeButtons = (props) => {
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

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(HomeButtons)
