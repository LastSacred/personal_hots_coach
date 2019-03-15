import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'

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
    <Grid.Row>
      <Segment raised>
        <Dropdown
          style={{maxWidth: 500, margin: 'auto'}}
          placeholder='Map'
          fluid
          search
          selection
          options={allMaps(props.allMaps)}
          onChange={(event) => props.updateDraftMap(event.target.innerText)}
        />
      </Segment>
    </Grid.Row>
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
