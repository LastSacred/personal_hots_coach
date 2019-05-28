import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Loader } from 'semantic-ui-react'

import { get } from '../services/api'

class HeroSetsContainer extends Component {

   componentDidMount() {
     get('stat_sets', 'token').then(this.props.updateStatSet)
   }

   showHeroSets = () => {
     if (this.props.heroSets.length === 0) return <Loader active inline='centered' />

     return this.props.heroSets.map(heroSet => {
       return (
         <div>{heroSet.hero.name}</div>
       )
     })
   }

  render() {
    return (
      <Container>
        {this.showHeroSets()}
      </Container>
    )
  }
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
)(HeroSetsContainer)
