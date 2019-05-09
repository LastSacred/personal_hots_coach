import React from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'

import Hero from './Hero'

const HeroesContainer = (props) => {
  const filteredHeroes = () => {
    return props.allHeroes.filter(hero => {
      const banNames = props.bans.map(hero => hero.name)
      const withHeroNames = props.withHeroes.map(hero => hero.name)
      const againstHeroNames = props.againstHeroes.map(hero => hero.name)
      return !banNames.concat(withHeroNames).concat(againstHeroNames).includes(hero.name)
    })
  }

  const showHeroes = () => {
    return filteredHeroes().map(hero => {
      return <Hero key={hero.id} hero={hero} parent={"HeroesContainer"} />
    })
  }

  return(
    <Segment inverted color='purple' style={{overflow: 'auto', height: 400}}>
      <Grid>
        {showHeroes()}
      </Grid>
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    allHeroes: state.allHeroes,
    bans: state.draft.bans,
    withHeroes: state.draft.with_heroes,
    againstHeroes: state.draft.against_heroes
  }
}

export default connect(mapStateToProps)(HeroesContainer)
