import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import Hero from './Hero'

const HeroesContainer = (props) => {
  const showHeroes = () => {
    return props.allHeroes.map(hero => {
      return <Hero key={hero.id} hero={hero} parent={"HeroesContainer"} />
    })
  }

  return(
    <Container>
      {showHeroes()}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    allHeroes: state.allHeroes
  }
}

export default connect(mapStateToProps)(HeroesContainer)