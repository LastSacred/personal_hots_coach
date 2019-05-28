import React from 'react'
import { connect } from 'react-redux'
import { Container, Form } from 'semantic-ui-react'
import { get } from '../services/api'

const HeroesFilter = (props) => {
  const filterHeroes = (value) => {
    get('heroes').then(heroes => {
      heroes = heroes.filter(hero => {
        const name = hero.name.toLowerCase().replace("ú", "u").replace(/[^A-Z0-9]/ig, "")
        const searchTerm = value.toLowerCase().replace(/[^A-Z0-9]/ig, "")

        return name.includes(searchTerm)
      })

      props.updateHeroes(heroes)
    })
  }

  const handleChange = (event) => {
    props.updateFileterValue(event.target.value)
    filterHeroes(event.target.value)
  }

  return(
    <Container>
      <Form>
        <Form.Field>
          <input
            style={{maxWidth: 500, margin: 'auto'}}
            placeholder='Hero Name'
            onChange={handleChange}
            value={props.filterValue}
          />
        </Form.Field>
      </Form>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    filterValue: state.filterValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateHeroes: (heroes) => dispatch({ type: 'UPDATE_HEROES', heroes: heroes }),
    updateFileterValue: (value) => dispatch({ type: 'UPDATE_FILTER_VALUE', value: value })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesFilter)
