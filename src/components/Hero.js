import React from 'react'
import { connect } from 'react-redux'
import { Image, Button, Section } from 'semantic-ui-react'

import emptyIcon from '../assets/empty.jpg'
import { getHeroes } from '../services/api'

const Hero = (props) => {
  const hero = props.hero || {
    name: '',
    role: '',
    icon_url: emptyIcon
  }

  const handleClick = () => {
    switch (props.parent) {
      case "HeroesContainer":
        props.selectHero(hero.name)
        return
      case "Bans":
        props.deselectBan(hero.name)
        break
      case "Team":
        props.deselectWithHero(hero.name)
        break
      case "Opponents":
        props.deselectAgainstHero(hero.name)
        break
      default:
    }

    getHeroes().then(heroes => props.updateHeroes(heroes))
  }

  const handleButtonClick = (event) => {
    switch (event.target.innerText) {
      case 'Ban':
        props.addToBans(hero)
        break
      case 'Team':
        props.addToWithHeroes(hero)
        break
      case 'Enemy':
        props.addToAgainstHeroes(hero)
        break
      default:
    }

    props.selectHero(null)
    getHeroes().then(heroes => props.updateHeroes(heroes))
    props.clearFilterValue()
  }

  const showButtons = () => {
    if (hero.name !== props.selectedHero) return null
    if (props.parent !== 'HeroesContainer') return null

    return (
      <Button.Group vertical onClick={handleButtonClick} style={{position: 'absolute', top: 1, left: "16%"}} >
        <Button compact color='grey'>Ban</Button>
        <Button compact color='blue'>Team</Button>
        <Button compact color='red'>Enemy</Button>
      </Button.Group>
    )
  }

  const style = () => {
    return {
      minHeight: 125,
      minWidth: 90,
      maxWidth: (props.parent === 'PickList' ? 90 : null),
      position: 'relative'
    }
  }

  const boxShadowValue = () => {
    let value = '0 0 1px 0px #fff'
    if (props.parent !== 'PickList' && props.parent !== 'HeroesContainer' && props.hero) value = '0 0 1px 1px #fff'
    if (props.parent === 'Team') value += ', 0 0 20px 7px #4478C4'
    if (props.parent === 'Bans') value += ', 0 0 20px 7px #7C7783'
    if (props.parent === 'Opponents') value += ', 0 0 20px 7px #D80808'

    return value
  }

  return(
    <div style={style()}>
      <Image
        style={
          {
            margin: 'auto',
            boxShadow: boxShadowValue()
          }
        }
        bordered
        onClick={handleClick}
        src={hero.icon_url}
        size='tiny'
        rounded
      />
      {showButtons()}
      <div>{hero.name}</div>
      <div>{hero.role}</div>
      {props.score ? <div>{props.score}</div> : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedHero: state.selectedHero
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateHeroes: (heroes) => dispatch({ type: 'UPDATE_HEROES', heroes: heroes }),
    selectHero: (heroName) => dispatch({ type: 'SELECT_HERO', heroName: heroName}),
    addToBans: (heroName) => dispatch({ type: 'ADD_TO_BANS', heroName: heroName}),
    addToWithHeroes: (heroName) => dispatch({ type: 'ADD_TO_WITH_HEROES', heroName: heroName}),
    addToAgainstHeroes: (heroName) => dispatch({ type: 'ADD_TO_AGAINST_HEROES', heroName: heroName}),
    deselectBan: (heroName) => dispatch({ type: 'DESELECT_BAN', heroName: heroName }),
    deselectWithHero: (heroName) => dispatch({ type: 'DESELECT_WITH_HERO', heroName: heroName }),
    deselectAgainstHero: (heroName) => dispatch({ type: 'DESELECT_AGAINST_HERO', heroName: heroName }),
    clearFilterValue: () => dispatch({ type: 'UPDATE_FILTER_VALUE', value: ''})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)
