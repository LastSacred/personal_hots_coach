import React from 'react'
import { connect } from 'react-redux'
import { Container, Form } from 'semantic-ui-react'
import { getHeroes } from '../services/backend'

const filterHeroes = (event, updateHeroes) => {
  const value = event.target.value

  getHeroes().then(heroes => {
    heroes = heroes.filter(hero => {
      const name = hero.name.toLowerCase().replace("ú", "u").replace(/[^A-Z0-9]/ig, "")
      const searchTerm = value.toLowerCase().replace(/[^A-Z0-9]/ig, "")

      return name.includes(searchTerm)
    })

    updateHeroes(heroes)
  })
}

const HeroesSearch = (props) => {
  return(
    <Container>
      <Form>
        <Form.Field onChange={(event) => filterHeroes(event, props.updateHeroes)}>
          <input placeholder='Hero Name' />
        </Form.Field>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    updateHeroes: (heroes) => dispatch({ type: 'UPDATE_HEROES', heroes: heroes })
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HeroesSearch)
