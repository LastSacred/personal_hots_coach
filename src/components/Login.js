import React, { Component } from 'react';
import { Button, Form, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../services/backend'

class Login extends Component{
  state = {
    username: '',
    password: '',
  }

  handleSubmit = (event) => {
    login(this.state.username, this.state.password)
      .then(data => {
        if (!data.token) return
        localStorage.token = data.token
        localStorage.username = this.state.username
        this.props.updateLogin()
      })
      
      this.setState({ username: '', password: ''})
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <Container>
        {this.props.loggedIn ? <Redirect to="/" /> : null}
        <Segment compact raised color='violet'>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input
                name='username'
                placeholder='Username'
                onChange={this.handleChange}
                value={this.state.username}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                name='password'
                type='password'
                placeholder='Password'
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Field>
            <Button type='submit'>Login</Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLogin: () => dispatch({ type: 'UPDATE_LOGIN'})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
