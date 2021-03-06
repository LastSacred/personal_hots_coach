import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css'
import './semantic/dist/semantic.min.css'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Draft from './components/Draft'
import Stats from './components/Stats'
import Settings from './components/Settings'
import Upload from './components/Upload'

class App extends Component {
  componentDidMount() {
    this.props.updatePage()
  }

  componentDidUpdate() {
    this.props.updatePage()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/draft" component={Draft} />
          <Route path="/stats" component={Stats} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/upload" component={Upload} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePage: () => dispatch({ type: 'UPDATE_PAGE'})
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
