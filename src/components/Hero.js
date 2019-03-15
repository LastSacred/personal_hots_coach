import React from 'react'
import { connect } from 'react-redux'
import { Container, Image, Button } from 'semantic-ui-react'

const handleClick = (props) => {
  switch (props.parent) {
    case "HeroesContainer":
      props.selectHero(props.hero.name)
      break
    default:
  }
}

const handleButtonClick = (event, props) => {
  switch (event.target.innerText) {
    case 'Ban':
      props.addToBans(props.hero.name)
      break
    case 'Team':
      props.addToWithHeroes(props.hero.name)
      break
    case 'Enemy':
      props.addToAgainstHeroes(props.hero.name)
      break
    default:
  }
}

const showButtons = (props) => {
  if (props.hero.name !== props.selectedHero) return null

  return (
    <Button.Group vertical onClick={(event) => handleButtonClick(event, props)} >
      <Button compact color='grey'>Ban</Button>
      <Button compact color='green'>Team</Button>
      <Button compact color='red'>Enemy</Button>
    </Button.Group>
  )
}

const Hero = (props) => {
  return(
    <Container>
      <Image
        onClick={() => handleClick(props)}
        src={props.hero.icon_url}
        size='tiny'
        rounded
      />
      {showButtons(props)}
      <div>{props.hero.name}</div>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    selectedHero: state.selectedHero
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectHero: (heroName) => dispatch({ type: 'SELECT_HERO', heroName: heroName}),
    addToBans: (heroName) => dispatch({ type: 'ADD_TO_BANS', heroName: heroName}),
    addToWithHeroes: (heroName) => dispatch({ type: 'ADD_TO_WITH_HEROES', heroName: heroName}),
    addToAgainstHeroes: (heroName) => dispatch({ type: 'ADD_TO_AGAINST_HEROES', heroName: heroName})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)
