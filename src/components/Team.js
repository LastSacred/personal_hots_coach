import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import Hero from './Hero'

const Team = (props) => {
  const showTeam = () => {
    let team = props.team

    while (team.length < 5) {
      team = [...team, null]
    }

    return team.map((hero, index) => {
      return <Hero key={index} hero={hero} parent={"Team"} />
    })
  }

  return(
    <Container>
      <h1>Team</h1>
      {showTeam()}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    team: state.draft.with_heroes
  }
}

export default connect(mapStateToProps)(Team)
