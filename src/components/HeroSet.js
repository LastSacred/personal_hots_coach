import React from 'react'
import { connect } from 'react-redux'
import { Image, Segment, Grid } from 'semantic-ui-react'

const HeroSet = (props) => {
  return (
    <Segment raised color ="violet">
      <Grid>
        <Grid.Row columns={7}>
          <Grid.Column>
            <Image
              bordered
              src={props.heroSet.hero.icon_url}
              size='tiny'
              rounded
            />
            <h2 style={{textAlign: 'left'}}>{props.heroSet.hero.name}</h2>
          </Grid.Column>
          <Grid.Column>
            <h3 style={{textAlign: 'left'}}>Score: {props.heroSet.score}</h3>
            <h3 style={{textAlign: 'left'}}>Win%: {props.heroSet.win_percent}</h3>
            <h3 style={{textAlign: 'left'}}>Matches: {props.heroSet.match_count}</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

const mapStateToProps = state => {
  return {
    heroSets: state.statSet.hero_sets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStatSet: (statSet) => dispatch({ type: 'UPDATE_STATSET', statSet: statSet })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroSet)
