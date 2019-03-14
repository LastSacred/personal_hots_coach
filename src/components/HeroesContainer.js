import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import Hero from './Hero'

const showHeroes = (heroes) => {
  return heroes.map(hero => {
    return <Hero key={hero.id} hero={hero} />
  })
}

const HeroesContainer = (props) => {
  return(
    <Container>
      {showHeroes(props.allHeroes)}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    allHeroes: state.allHeroes
  }
}

export default connect(mapStateToProps)(HeroesContainer)
