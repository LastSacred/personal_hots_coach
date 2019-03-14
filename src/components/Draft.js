import React, { Component } from 'react'
import Maps from './Maps'
import { connect } from 'react-redux'
import { getMaps, getHeroes, postDraft } from '../services/backend'


class Draft extends Component {
  componentDidMount() {
    getMaps().then(maps => this.props.dispatch({
      type: 'UPDATE_MAPS',
      maps: maps
    }))

    getHeroes().then(heroes => this.props.dispatch({
      type: 'UPDATE_HEROES',
      heroes: heroes
    }))

    postDraft(this.props.draft).then(draft => this.props.dispatch({
      type: 'UPDATE_PICKLIST',
      pickList: draft.pick_list
    }))
  }

  render() {
    return(
      <Maps />
    )
  }
}

const mapStateToProps = state => {
  return {
    draft: state.draft
  }
}

export default connect(mapStateToProps)(Draft)
