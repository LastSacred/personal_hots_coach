import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Segment, Container, Message, Loader } from 'semantic-ui-react'

import { postReplays, getReplays, postMatches } from '../services/api'

class Upload extends Component {
  state = {
    message: [null, null, null]
  }

  handleSubmit = (event) => {
    let files = event.target.files.files
    const data = new FormData()

    this.setState({message: ['loading', null, null]})

    getReplays().then(replayFiles => {
      files = [...files].filter(file => !replayFiles.find(replayFile => replayFile.name === file.name))

      for (let i = 0; i < files.length; i++) {
        data.append('files[]', files[i])
      }

      if (files.length > 0) {
        postReplays(data).then(this.setState({
          message: [
            "success",
            "Uploaded",
            `Uploaded ${files.length} files`
          ]
        }), () => {
          postMatches()
        })
      } else {
        this.setState({
          message: ["warning", "No New Files", "There are no new files to upload"]
        })
      }
    })
  }

  render() {
    return(
      <Container>
        {this.props.loggedIn ? null : <Redirect to="/login" />}
        <Segment compact raised color='violet'>
        <h1>Upload</h1>
          <Form
            success={this.state.message[0] === 'success'}
            warning={this.state.message[0] === 'warning'}
            size='large'
            onSubmit={this.handleSubmit}
          >
            <Form.Field>
              <label>Files</label>
              <input
                name='files'
                type="file"
                multiple
              />
            </Form.Field>
            {
              (this.state.message[0] === 'loading' || this.state.message[1] === "Uploaded") ?
              <Loader active inline='centered' />
              :
              null
            }
            <Message
              success
              header={this.state.message[1]}
              content={this.state.message[2]}
            />
            <Message
              warning
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
