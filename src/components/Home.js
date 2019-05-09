import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import HomeButtons from './HomeButtons'

const Home = (props) => {

  return(
    <Container>
      <h1 style={{fontSize: '2.5em'}}>Welcome to Personal HotS Coach</h1>
      <p>
        The Heroes of the Storm companion that uses your historical match data to make draft pick suggestions.
      </p>
      <Grid style={{marginTop: '100px'}}>
      <HomeButtons />
      </Grid>
      <p style={{width: '300px', position: 'absolute', bottom: '50px', left: '50%', marginLeft: '-150px'}}>
        Personal HotS Coach uses <a href="http://hotsapi.net">HotsApi</a>
      </p>
    </Container>
  )
}

export default Home
