import React from 'react'
import { Container } from 'semantic-ui-react'

import HeroesSearch from './HeroesSearch'
import HeroesContainer from './HeroesContainer'

const allHeroes = () => {

}

const Heroes = (props) => {
  return(
    <Container>
      <HeroesSearch />
      <HeroesContainer />
    </Container>
  )
}

export default Heroes
