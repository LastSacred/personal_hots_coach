import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import { get, postDraft, postMatches } from '../services/api'

import Maps from './Maps'
import Heroes from './Heroes'
import Bans from './Bans'
import Team from './Team'
import Opponents from './Opponents'
import PickList from './PickList'

class Draft extends Component {
  componentDidMount() {
    if (!this.props.loggedIn) return
    get('maps').then(this.props.updateMaps)

    get('heroes').then(this.props.updateHeroes)

    postMatches()

    postDraft(this.props.draft).then(draft => this.props.updatePickList(draft.pick_list))
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) return
    this.props.updatePickList([])
    postDraft(this.props.draft).then(draft => this.props.updatePickList(draft.pick_list))
  }

  render() {
    return(
        <Grid>
          {this.props.loggedIn ? null : <Redirect to="/login" />}
        <Bans />
          <Grid.Row>
            <Team />
            <Grid.Column width={12}>
              <Maps />
              <Heroes />
              <PickList />
            </Grid.Column>
            <Opponents />
          </Grid.Row>
        </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    draft: state.draft,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMaps: (maps) => dispatch({ type: 'UPDATE_MAPS', maps: maps }),
    updateHeroes: (heroes) => dispatch({ type: 'UPDATE_HEROES', heroes: heroes }),
    updatePickList: (pickList) => dispatch({ type: 'UPDATE_PICKLIST', pickList: pickList })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Draft)
