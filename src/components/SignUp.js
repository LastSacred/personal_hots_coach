import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Segment, Container, Message } from 'semantic-ui-react'

import { postUsers, login } from '../services/api'

class SignUp extends Component{
  state = {
    name: '',
    password: '',
    battletag: '',
    errors: []
  }

  handleSubmit = (event) => {
    const name = this.state.name

    postUsers(this.state)
      .then((data) => {
        if (data.errors) {
          this.setState({errors: data.errors})
          return
        }

        login(this.state)
          .then(data => {
            if (!data.token) return
            localStorage.currentUser.token = data.token
            localStorage.currentUser.username = name
            this.props.updateLogin()
          })
        }
      )
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
          <Form
            error={this.state.errors.length > 0}
            size='large'
            onSubmit={this.handleSubmit}
          >
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
            <Form.Field>
              <label>Battletag</label>
              <input
                name='battletag'
                placeholder='Battletag'
                onChange={this.handleChange}
                value={this.state.battletag}
              />
            </Form.Field>
            <Message
              error
              header='Errors'
              list={this.state.errors}
              style={{textShadow: 'none'}}
            />
            <Button type='submit'>Submit</Button>
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
)(SignUp)
