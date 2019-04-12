import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

import HeroesFilter from './HeroesFilter'
import HeroesContainer from './HeroesContainer'

const Heroes = (props) => {
  return(
    <Grid.Row>
      <Segment raised>
        <HeroesFilter />
        <HeroesContainer />
      </Segment>
    </Grid.Row>
  )
}

export default Heroes
