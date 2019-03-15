import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import Hero from './Hero'

const Bans = (props) => {
  const showBans = () => {
    let bans = props.bans

    while (bans.length < 6) {
      bans = [...bans, null]
    }

    return bans.map((hero, index) => {
      return (
        <Grid.Column key={index}>
          <Hero hero={hero} parent={"Bans"} />
        </Grid.Column>
      )
    })
  }

  return(
      <Grid.Row columns={12}>
        <Grid.Column />
        <Grid.Column />
        <Grid.Column>
          <h1>Bans</h1>
        </Grid.Column>
        {showBans()}
        <Grid.Column />
        <Grid.Column />
        <Grid.Column />
      </Grid.Row>
  )
}

const mapStateToProps = state => {
  return {
    bans: state.draft.bans
  }
}

export default connect(mapStateToProps)(Bans)
