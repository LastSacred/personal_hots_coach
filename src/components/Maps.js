import React from 'react'
import { connect } from 'react-redux'
import { Container, Dropdown } from 'semantic-ui-react'

const allMaps = (maps) => {
  return maps.map(map => {
     return {
      key: map.id,
      value: map.name,
      text: map.name
    }
  })
}

const Maps = (props) => {
  return(
    <Container>
      <Dropdown
        placeholder='Map'
        fluid
        search
        selection
        options={allMaps(props.allMaps)}
        onChange={(event) => props.updateDraftMap(event.target.innerText)}
      />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    allMaps: state.allMaps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateDraftMap: (map) => dispatch({ type: 'UPDATE_DRAFT_MAP', map: map})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maps)
