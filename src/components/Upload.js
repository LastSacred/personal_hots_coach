import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Segment, Container } from 'semantic-ui-react'

import { postReplays } from '../services/api'

const Upload = (props) => {
  // const uploadReplay = (file) => {
  //   let data = new FormData()
  //
  //   data.set('file', file)
  //
  //   postReplay(data).then(console.log)
  // }

  const handleSubmit = (event) => {
    const files = event.target.files.files
    const data = new FormData()

    for (let i = 0; i < files.length; i++) {
      data.append('files[]', files[i])
    }

    postReplays(data).then(console.log)
  }

  return(
    <Container>
      {props.loggedIn ? null : <Redirect to="/login" />}
      <Segment compact raised color='violet'>
      <h1>Upload</h1>
        <Form size='large' onSubmit={handleSubmit}>
          <Form.Field>
            <label>Files</label>
            <input
              name='files'
              type="file"
              multiple
              placeholder='Files'
              onChange={null}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    </Container>
  )
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
)(Upload)
