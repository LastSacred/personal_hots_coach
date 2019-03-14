import React, { Component } from 'react'
import { connect } from 'react-redux'

class Maps extends Component {
  componentDidMount() {
    this.props.updateMaps()
  }

  render() {
    return(
      <h1>Maps</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    allMaps: state.allMaps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMaps: () => dispatch({ type: 'UPDATE_MAPS'})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maps)
