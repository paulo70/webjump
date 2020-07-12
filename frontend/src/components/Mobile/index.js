import React from 'react'
import { slide as Menu} from 'react-burger-menu'
import {
  Responsive,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice
} from 'responsive-react'

import './menu.scss'

function Hamburger () {
  return (

    <Responsive displayIn = {['mobile']}>
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/about">
          About
        </a>

        <a className="menu-item" href="/services">
          Services
        </a>

        <a className="menu-item" href="/contact">
          Contact us
        </a>
      </Menu>
    </Responsive>
  )
}

export default Hamburger
