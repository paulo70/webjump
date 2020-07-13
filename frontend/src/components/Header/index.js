import React from 'react'

import Login    from '../Login'
import Research from '../Research'
import Menu     from '../Menu'
import Mobile   from '../Mobile'

import './header-devices.scss'

function Header(){
  return(
    <header>
      <Mobile />
      <Login />
      <Research />
      <Menu />
    </header>
  )
}

export default Header
