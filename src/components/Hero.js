import React from 'react'
import { Container, Image } from 'semantic-ui-react'

const Hero = (props) => {
  return(
    <Container>
      <Image src={props.hero.icon_url} size='tiny' rounded />
      <div>{props.hero.name}</div>
    </Container>
  )
}

export default Hero
