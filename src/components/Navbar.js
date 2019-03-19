import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



const Navbar = (props) => {
  const logInOut = (props) => {
    if (props.loggedIn) {
      const options = [
        { key:'profile', text: "Profile", as: Link, to: '/profile' },
        { key:'logout', text: "Log Out", value: "logout"}
      ]

      const handleChange = (event) => {
        if (event.target.innerText !== "Log Out") return

        localStorage.clear()
        props.updateLogin()
      }

      return (
        // <Link to='/profile'>
          <Dropdown
            item
            simple
            text={props.loggedIn}
            direction='right'
            options={options}
            onChange={handleChange}
          />
          // <Menu.Item
          //   name=''
          //   color={'violet'}
          //   active={props.page === 'profile'}
          // >
          //   {props.loggedIn}
          // </Menu.Item>
        // </Link>
      )
    } else {
      return(
        <Link to='/login'>
          <Menu.Item
            name='login'
            color={'violet'}
            active={props.page === 'login'}
          />
        </Link>
      )
    }
  }

  return(
    <Menu inverted>
       <Menu.Item active={true} header>Personal HotS Coach</Menu.Item>
       <Link to='/'>
         <Menu.Item
           name='home'
           color={'violet'}
           active={props.page === ''}
         />
        </Link>
       <Link to='/draft'>
         <Menu.Item
           name='draft'
           color={'violet'}
           active={props.page === 'draft'}
         />
       </Link>
       <Link to='/stats'>
         <Menu.Item
           name='stats'
           color={'violet'}
           active={props.page === 'stats'}
         />
       </Link>
       <Link to='/upload'>
         <Menu.Item
           name='upload'
           color={'violet'}
           active={props.page === 'upload'}
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
    updateLogin: () => dispatch({ type: 'UPDATE_LOGIN'})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
