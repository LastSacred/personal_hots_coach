import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = (props) => {
  return(
    <Menu inverted>
       <Menu.Item header>Personal HotS Coach</Menu.Item>
       <Menu.Item
         name='home'
         color={'violet'}
         active={true}
         onClick={null}
       />
       <Menu.Item
       name='draft'
       color={'violet'}
       active={false}
       onClick={null}
       />
       <Menu.Item
         name='status'
         color={'violet'}
         active={false}
         onClick={null}
       />
       <Menu.Item
         name='profile'
         color={'violet'}
         active={false}
         onClick={null}
       />
     </Menu>
  )
}

export default Navbar
