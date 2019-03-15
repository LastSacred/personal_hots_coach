import React from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'

import Hero from './Hero'

const HeroesContainer = (props) => {
  const showHeroes = () => {
    return props.allHeroes.map(hero => {
      return <Hero key={hero.id} hero={hero} parent={"HeroesContainer"} />
    })
  }

  return(
    <Segment style={{overflow: 'auto', height: 420}}>
      <Grid>
        {showHeroes()}
      </Grid>
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    allHeroes: state.allHeroes
  }
}

export default connect(mapStateToProps)(HeroesContainer)
