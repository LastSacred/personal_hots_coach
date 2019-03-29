import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Grid, Segment, Form } from 'semantic-ui-react'

const Maps = (props) => {
  const allMaps = () => {
    return props.allMaps.map(map => {
       return {
        key: map.id,
        value: map.name,
        text: map.name
      }
    })
  }

  return(
    <Grid.Row>
      <Segment raised color ="violet">
        <Form>
          <Form.Field>
            <Dropdown
              style={{maxWidth: 500, margin: 'auto'}}
              placeholder='Map'
              fluid
              search
              selection
              options={allMaps()}
              onChange={(event) => {props.updateDraftMap(event.target.parentElement.querySelector('.selected').innerText)}}
            />
          </Form.Field>
        </Form>
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
