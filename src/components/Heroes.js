import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import HeroesSearch from './HeroesSearch'
import HeroesContainer from './HeroesContainer'

const Heroes = (props) => {
  return(
    <Grid.Row>
      <Segment raised>
        <HeroesSearch />
        <HeroesContainer />
      </Segment>
    </Grid.Row>
  )
}

export default Heroes
