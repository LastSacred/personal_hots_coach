import React from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'

import Hero from './Hero'

const HeroesContainer = (props) => {
  const showHeroes = () => {
    return props.pickList.map(heroObj => {
      return <Hero key={heroObj.hero.id} hero={heroObj.hero} score={heroObj.score} parent={"PickList"} />
    })
  }

  return(
    <Grid.Row>
      <h1>Your Picks</h1>
      {showHeroes()}
    </Grid.Row>
  )
}

const mapStateToProps = state => {
  return {
    pickList: state.pickList
  }
}

export default connect(mapStateToProps)(HeroesContainer)
