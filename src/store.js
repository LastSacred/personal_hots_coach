import { createStore, combineReducers } from 'redux'

import loggedInReducer from './reducers/loggedInReducer'
import pageReducer from './reducers/pageReducer'
import filterValueReducer from './reducers/filterValueReducer'
import selectedHeroReducer from './reducers/selectedHeroReducer'
import allMapsReducer from './reducers/allMapsReducer'
import allHeroesReducer from './reducers/allHeroesReducer'
import pickListReducer from './reducers/pickListReducer'
import draftReducer from './reducers/draftReducer'
import settingsReducer from './reducers/settingsReducer'
import statSetReducer from './reducers/statSetReducer'

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  page: pageReducer,
  filterValue: filterValueReducer,
  selectedHero: selectedHeroReducer,
  allMaps: allMapsReducer,
  allHeroes: allHeroesReducer,
  pickList: pickListReducer,
  draft: draftReducer,
  settings: settingsReducer,
  statSet: statSetReducer
})

export default createStore(rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
