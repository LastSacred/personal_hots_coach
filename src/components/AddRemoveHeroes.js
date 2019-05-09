import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Form, Button } from 'semantic-ui-react'

import { postDraft, updateUser, getHeroes } from '../services/api.js'

class AddRemoveHeroes extends Component {
  state = {
    addRemove: [null, '']
  }

  draft = () => {
    return {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    }
  }

  allHeroes = () => {
    return this.props.allHeroes.map(hero => {
       return {
        key: hero.id,
        value: hero.name,
        text: hero.name
      }
    })
  }

  componentDidMount() {
    getHeroes().then(heroes => this.props.updateHeroes(heroes))
  }

  handleAddRemoveButtonClick = (event) => {
    this.props.updatePickList([])
    let newRoster

    if (this.state.addRemove[0] === "Add") {
      const addedHero = this.props.allHeroes.find(hero => hero.name === this.state.addRemove[1])
      newRoster = [...this.props.heroes, addedHero]
    } else {
      newRoster = this.props.heroes.filter(hero => hero.name !== this.state.addRemove[1])
    }

    this.setState({
      addRemove: [null, '']
    })

    const newRosterNames = newRoster.map(hero => hero.name)

    updateUser({roster: newRosterNames}).then(() => {
      postDraft(this.draft()).then(draft => this.props.updatePickList(draft.pick_list))
    })

    this.props.updateSettingsHeroes(newRoster)
  }

  handleAddRemoveHeroChange = (event) => {
    const selectedHero = event.target.innerText
    const action = (this.props.pickList.find(heroObj => heroObj.hero.name === selectedHero) ? "Remove" : "Add")

    this.setState({addRemove: [action, selectedHero]})
  }

  render() {
    return (
      <Form>
        <Form.Group inline style={{marginTop: 15}}>
          <Form.Field>
            <Dropdown
              style={{width: 250}}
              placeholder='Add/Remove Hero'
              fluid
              search
              selection
              options={this.allHeroes()}
              value={this.state.addRemove[1]}
              onChange={this.handleAddRemoveHeroChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              disabled={!this.state.addRemove[0]}
              type='submit'
              onClick={this.handleAddRemoveButtonClick}
            >
              {this.state.addRemove[0] ? this.state.addRemove[0] : null}
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    allHeroes: state.allHeroes,
    pickList: state.pickList,
    heroes: state.settings.heroes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateHeroes: (heroes) => dispatch({ type: 'UPDATE_HEROES', heroes: heroes }),
    updatePickList: (pickList) => dispatch({ type: 'UPDATE_PICKLIST', pickList: pickList }),
    updateSettingsHeroes: (heroes) => dispatch({ type: 'UPDATE_SETTINGS_HEROES', heroes: heroes })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRemoveHeroes)
