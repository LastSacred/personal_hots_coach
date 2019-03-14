import React from 'react'
import { connect } from 'react-redux'
import { Container, Form } from 'semantic-ui-react'
import { getHeroes } from '../services/backend'

const filterHeroes = (event, dispatch) => {
  const value = event.target.value

  getHeroes().then(heroes => {
    heroes = heroes.filter(hero => {
      const name = hero.name.toLowerCase().replace("ú", "u").replace(/[^A-Z0-9]/ig, "")
      const searchTerm = value.toLowerCase().replace(/[^A-Z0-9]/ig, "")

      return name.includes(searchTerm)
    })

    dispatch({
      type: 'UPDATE_HEROES',
      heroes: heroes
    })
  })
}

const HeroesSearch = (props) => {
  return(
    <Container>
      <Form>
        <Form.Field onChange={(event) => filterHeroes(event, props.dispatch)}>
          <input placeholder='Hero Name' />
        </Form.Field>
      </Form>
    </Container>
  )
}

export default connect()(HeroesSearch)
