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

        <a className="menu-item" href="/">
          Camisetas
        </a>

        <a className="menu-item" href="/">
          Calças
        </a>

        <a className="menu-item" href="/">
          Sapatos
        </a>

        <a className="menu-item" href="/">
          Contato
        </a>
      </Menu>
    </Responsive>
  )
}

export default Hamburger
