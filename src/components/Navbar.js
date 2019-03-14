import React from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const logInOut = (props) => {
  if (props.loggedIn) {
    return (
      <Link to='/profile'>
        <Menu.Item
          name=''
          color={'violet'}
          active={props.page === 'profile'}
          onClick={null}
        >
          {props.loggedIn}
        </Menu.Item>
      </Link>
    )
  } else {
    return(
      <Link to='/login'>
        <Menu.Item
          name='login'
          color={'violet'}
          active={props.page === 'login'}
          onClick={null}
        />
      </Link>
    )
  }
}

const Navbar = (props) => {
  return(
    <Menu inverted>
       <Menu.Item active={true} header>Personal HotS Coach</Menu.Item>
       <Link to='/'>
         <Menu.Item
           name='home'
           color={'violet'}
           active={props.page === ''}
           onClick={null}
         />
        </Link>
       <Link to='/draft'>
         <Menu.Item
           name='draft'
           color={'violet'}
           active={props.page === 'draft'}
           onClick={null}
         />
       </Link>
       <Link to='/stats'>
         <Menu.Item
           name='stats'
           color={'violet'}
           active={props.page === 'stats'}
           onClick={null}
         />
       </Link>
       <Menu.Menu position='right'>
         {logInOut(props)}
       </Menu.Menu>
     </Menu>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
