import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import Hero from './Hero'

const Opponents = (props) => {
  const showOpponents = () => {
    let opponents = props.opponents

    while (opponents.length < 5) {
      opponents = [...opponents, null]
    }

    return opponents.map((hero, index) => {
      return <Hero key={index} hero={hero} parent={"Opponents"} />
    })
  }

  return(
    <Grid.Column width={2}>
      <h1>Opponents</h1>
      {showOpponents()}
    </Grid.Column>
  )
}

const mapStateToProps = state => {
  return {
    opponents: state.draft.against_heroes
  }
}

export default connect(mapStateToProps)(Opponents)
