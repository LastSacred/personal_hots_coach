import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Segment, Container } from 'semantic-ui-react'

import { postReplays, getReplays } from '../services/api'

class Upload extends Component {
  state = {
    message: null
  }

  handleSubmit = (event) => {
    let files = event.target.files.files
    const data = new FormData()

    getReplays().then(replayFiles => {
      files = [...files].filter(file => !replayFiles.find(replayFile => replayFile.name === file.name))

      for (let i = 0; i < files.length; i++) {
        data.append('files[]', files[i])
      }

      if (files.length > 0) return postReplays(data).then(this.setState({message: ["success", "Uploaded", `Uploaded ${files.length} files`] }))
    })
  }

  render() {
    return(
      <Container>
        {this.props.loggedIn ? null : <Redirect to="/login" />}
        <Segment compact raised color='violet'>
        <h1>Upload</h1>
          <Form success={this.state.message[0] === 'success'} size='large' onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Files</label>
              <input
                name='files'
                type="file"
                multiple
              />
            </Form.Field>
            <Message
              success
              header={this.state.message[1]}
              content={this.state.message[2]}
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
)(Upload)
