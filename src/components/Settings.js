import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Radio, Dropdown, Form, Button } from 'semantic-ui-react'

import { getUser, postDraft, postMatches, updateUser, getHeroes } from '../services/api.js'
import PickList from './PickList'

class Settings extends Component {
  state = {
    battletag: null,
    auto_roster: false,
    heroes: [],
    addRemove: [null, null]
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
    postMatches()

    getHeroes().then(heroes => this.props.updateHeroes(heroes))

    getUser().then(user => {
      this.setState(user)
    })

    postDraft(this.draft()).then(draft => this.props.updatePickList(draft.pick_list))
  }

  handleAutoRosterClick = (event) => {
    this.props.updatePickList([])

    this.setState({auto_roster: !this.state.auto_roster}, () => {
      updateUser(this.state).then(() => {
        postDraft(this.draft()).then(draft => this.props.updatePickList(draft.pick_list))
      })
    })
  }

  handleAddRemoveHeroChange = (event) => {
    const selectedHero = event.target.innerText
    const action = (this.props.pickList.find(heroObj => heroObj.hero.name === selectedHero) ? "Remove" : "Add")

    this.setState({addRemove: [action, selectedHero]})
  }

  handleAddRemoveButtonClick = (event) => {
    let newHeroes

    if (this.state.addRemove[0] === "Add") {
      const addedHero this.props.allHeroes.find(hero => hero.name === this.state.addRemove[1])
      newHeroes = [...this.state.heroes, addedHero]
    } else {
      newHeroes = this.state.heroes.filter(hero => hero.name !== this.state.addRemove[1])
    }
    console.log(newHeroes);
    // updateUser({heroes: heroes})
  }

  showAddRemoveHeroes = () => {
    if (this.state.auto_roster) {
      return null
    } else {
      return (
        <Form>
          <Form.Group inline>
            <Form.Field>
              <Dropdown
                style={{width: 250}}
                placeholder='Add/Remove Hero'
                fluid
                search
                selection
                options={this.allHeroes()}
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

  render() {
    return(
      <Container textAlign='left'>
        {this.props.loggedIn ? null : <Redirect to="/Login" />}
        <h1>{this.props.loggedIn}</h1>
        <h2>Battletag</h2>
        <div>{this.state.battletag}</div>
        <h2>Roster</h2>
        <div>
          <Radio
            toggle
            label="Auto"
            checked={this.state.auto_roster}
            onClick={this.handleAutoRosterClick}
          />
          {this.showAddRemoveHeroes()}
        </div>
        <PickList />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    pickList: state.pickList,
    allHeroes: state.allHeroes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateHeroes: (heroes) => dispatch({ type: 'UPDATE_HEROES', heroes: heroes }),
    updatePickList: (pickList) => dispatch({ type: 'UPDATE_PICKLIST', pickList: pickList })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
