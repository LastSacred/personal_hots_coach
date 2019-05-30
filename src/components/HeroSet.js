import React from 'react'
import { connect } from 'react-redux'
import { Image, Segment, Grid } from 'semantic-ui-react'

const HeroSet = (props) => {
  return (
    <Segment raised color ="violet">
      <Grid>
        <Grid.Row columns={5}>
          <Grid.Column>
            <Image
              style={{margin: 'auto'}}
              bordered
              src={props.heroSet.hero.icon_url}
              size='small'
              rounded
            />
            <h2>{props.heroSet.hero.name}</h2>
          </Grid.Column>
          <Grid.Column>
            <h3 style={{marginTop: '35px'}}>Score</h3>
            <div style={{fontSize: '5em', marginTop: '40px'}}>{props.heroSet.score}</div>
          </Grid.Column>
          <Grid.Column>
            <h3 style={{marginTop: '35px'}}>Win%</h3>
            <div style={{fontSize: '5em', marginTop: '40px'}}>{props.heroSet.win_percent}</div>
          </Grid.Column>
          <Grid.Column>
            <h3 style={{marginTop: '35px'}}>Matches</h3>
            <div style={{fontSize: '5em', marginTop: '40px'}}>{props.heroSet.match_count}</div>
          </Grid.Column>
          <Grid.Column>
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
