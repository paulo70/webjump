import React from 'react'

import UL from './items'

import './menu.scss'
import './menu-devices.scss'

function Menu(){
 return (
    <div className='menu'>
      <nav className='menu-nav'>
        <UL />
      </nav>
    </div>
  )
}

export default Menu
