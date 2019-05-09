import React from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Loader } from 'semantic-ui-react'

import Hero from './Hero'

const PickList = (props) => {
  const filteredHeroes = () => {
    if (props.page === 'settings') return props.pickList

    return props.pickList.filter(obj => {
      const banNames = props.bans.map(hero => hero.name)
      const withHeroNames = props.withHeroes.map(hero => hero.name)
      const againstHeroNames = props.againstHeroes.map(hero => hero.name)
      return !banNames.concat(withHeroNames).concat(againstHeroNames).includes(obj.hero.name)
    })
  }

  const showHeroes = () => {
    if (props.pickList.length === 0) return <Loader active inline='centered' />
    return filteredHeroes().map(heroObj => {
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
    pickList: state.pickList,
    bans: state.draft.bans,
    withHeroes: state.draft.with_heroes,
    againstHeroes: state.draft.against_heroes,
    page: state.page
  }
}

export default connect(mapStateToProps)(PickList)
