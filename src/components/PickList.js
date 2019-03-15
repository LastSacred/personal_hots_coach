import React from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Segment } from 'semantic-ui-react'

import Hero from './Hero'

const HeroesContainer = (props) => {
  const showHeroes = () => {
    return props.pickList.map(heroObj => {
      return <Hero key={heroObj.hero.id} hero={heroObj.hero} score={heroObj.score} parent={"PickList"} />
    })
  }

  return(
    <Segment style={{overflow: 'auto', height: 140}}>
      <Grid>
        {showHeroes()}
      </Grid>
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    pickList: state.pickList
  }
}

export default connect(mapStateToProps)(HeroesContainer)
