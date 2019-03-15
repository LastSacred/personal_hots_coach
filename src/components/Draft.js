import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMaps, getHeroes, postDraft } from '../services/backend'
import { Container } from 'semantic-ui-react'

import Maps from './Maps'
import Heroes from './Heroes'
import Bans from './Bans'
import Team from './Team'
import Opponents from './Opponents'

class Draft extends Component {
  componentDidMount() {
    getMaps().then(maps => this.props.updateMaps(maps))

    getHeroes().then(heroes => this.props.updateHeroes(heroes))

    postDraft(this.props.draft).then(draft => this.props.updatePickList(draft.pick_list))
  }

  componentDidUpdate() {
    postDraft(this.props.draft).then(draft => this.props.updatePickList(draft.pick_list))
  }

  render() {
    return(
      <Container>
        <Bans />
        <Team />
        <Opponents />
        <Maps />
        <Heroes />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    draft: state.draft
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
