import React from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Loader } from 'semantic-ui-react'

import Hero from './Hero'

const PickList = (props) => {
  const showHeroes = () => {
    if (props.pickList.length === 0) return <Loader active inline='centered' />
    return props.pickList.map(heroObj => {
      return <Hero key={heroObj.hero.id} hero={heroObj.hero} score={heroObj.score} parent={"PickList"} />
    })
  }

  return(
    <Segment>
      <Grid style={{overflow:'scroll hidden',height: 140, flexWrap: 'nowrap', textAlign: 'center'}}>
        {showHeroes()}
      </Grid>
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    pickList: state.pickList
  }
}

export default connect(mapStateToProps)(PickList)
