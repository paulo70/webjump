import React from 'react'

import Login    from '../Login'
import Research from '../Research'
import Menu     from '../Menu'
import Mobile   from '../Mobile'

function Header(){
  return(
    <header>
      <Mobile />
      <Login />
      <Research />
    </header>
  )
}

export default Header
