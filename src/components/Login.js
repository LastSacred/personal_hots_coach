import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Button, Form, Segment, Container } from 'semantic-ui-react'

import { login } from '../services/api'

class Login extends Component{
  state = {
    name: '',
    password: '',
  }

  handleSubmit = (event) => {
    const name = this.state.name

    login(this.state)
      .then(data => {
        if (!data.token) return
        localStorage.token = data.token
        localStorage.username = name
        this.props.updateLogin()
      })

      this.setState({ name: '', password: ''})
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
        <Segment compact raised color='violet' style={{margin: 'auto'}}>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input
                name='name'
                placeholder='Username'
                onChange={this.handleChange}
                value={this.state.name}
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
            <Link to='/signup'>
              <div style={{lineHeight: '50px'}}>Sign Up</div>
            </Link>
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
