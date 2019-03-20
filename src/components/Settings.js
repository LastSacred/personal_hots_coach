import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Radio } from 'semantic-ui-react'

import { getUser, postDraft, postMatches, updateUsers, getHeroes } from '../services/api.js'
import PickList from './PickList'

class Settings extends Component {
  state = {
    battletag: null,
    auto_roster: false
  }

  draft = () => {
    return {
      map: '',
      bans: [],
      with_heroes: [],
      against_heroes: []
    }
  }

  componentDidMount() {
    postMatches()

    getHeroes().then(heroes => this.props.updateHeroes(heroes))

    getUser().then(user => {
      this.setState(user)
    })

    postDraft(this.draft()).then(draft => this.props.updatePickList(draft.pick_list))
  }

  handleAutoRosterClick = () => {
    this.props.updatePickList([])

    this.setState({auto_roster: !this.state.auto_roster}, () => {
      updateUsers(this.state).then(() => {
        postDraft(this.draft()).then(draft => this.props.updatePickList(draft.pick_list))
      })
    })
  }

  showAddRemoveHeroes = () => {
    if (this.state.auto_roster) {
      return null
    } else {
      // <Dropdown
      //   style={{maxWidth: 500}}
      //   placeholder='Add/Remove Hero'
      //   fluid
      //   search
      //   selection
      //   options={allMaps(props.allMaps)}
      //   onChange={(event) => props.updateDraftMap(event.target.innerText)}
      // />
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

        </div>
        <PickList />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
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
