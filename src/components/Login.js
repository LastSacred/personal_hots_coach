import React, { Component } from 'react';
import { Button, Form, Segment, Container } from 'semantic-ui-react'

import { login } from '../services/backend'

class Login extends Component{
  state = {
    username: '',
    password: '',
  }

  handleSubmit = (event) => {
    localStorage.username = this.state.username
    login(this.state.username, this.state.password)
      .then(data => localStorage.token = data.token)

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

export default Login
