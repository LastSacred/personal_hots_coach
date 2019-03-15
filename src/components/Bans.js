import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import Hero from './Hero'

const Bans = (props) => {
  const showBans = () => {
    let bans = props.bans

    while (bans.length < 6) {
      bans = [...bans, null]
    }

    return bans.map((hero, index) => {
      return <Hero key={index} hero={hero} parent={"Bans"} />
    })
  }

  return(
    <Container>
      <h1>Bans</h1>
      {showBans()}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    bans: state.draft.bans
  }
}

export default connect(mapStateToProps)(Bans)
