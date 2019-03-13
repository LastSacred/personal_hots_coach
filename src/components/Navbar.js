import React from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const logInOut = () => {
  if (localStorage.token) {
    return (
      <Menu.Item
        name=''
        color={'violet'}
        active={false}
        onClick={null}
      >
        {localStorage.username}
      </Menu.Item>
    )
  } else {
    return(
      <Link to='/login'>
        <Menu.Item
          name='login'
          color={'violet'}
          active={false}
          onClick={null}
        />
      </Link>
    )
  }
}

const Navbar = (props) => {
  return(
    <Menu inverted>
       <Menu.Item header>Personal HotS Coach</Menu.Item>
       <Link to='/'>
         <Menu.Item
           name='home'
           color={'violet'}
           active={true}
           onClick={null}
         />
        </Link>
       <Menu.Item
       name='draft'
       color={'violet'}
       active={false}
       onClick={null}
       />
       <Menu.Item
         name='stats'
         color={'violet'}
         active={false}
         onClick={null}
       />
       <Menu.Menu position='right'>
         {logInOut()}
       </Menu.Menu>
     </Menu>
  )
}

export default Navbar
