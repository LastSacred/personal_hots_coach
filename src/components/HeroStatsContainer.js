import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

class HeroStatsContainer extends Component {

   componentDidMount() {

   }

  render() {
    return (

    )
  }

  const mapStateToProps = state => {
    return {
      draft: state.draft,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      updateMaps: (maps) => dispatch({ type: 'UPDATE_MAPS', maps: maps }),
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Draft)
}
