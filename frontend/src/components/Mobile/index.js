import React, { useState, useEffect } from 'react'
import { slide as Menu} from 'react-burger-menu'
import axios from 'axios'

import {
  Responsive,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice
} from 'responsive-react'

import './menu.scss'

function Hamburger () {

  const URL = 'http://localhost:3001/links'

  const [ data, setData ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios (URL)
      const res = req.data.items

      setData(res)
    }

    fetchData()
  },[])

  return (

    <Responsive displayIn = {['mobile']}>
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>

        {data.map((item, index) =>
          <li key = { index }>
            <a className="menu-item" href = {item.path}>
              {item.name}
            </a>
          </li>
        )}

        <a className="menu-item" href="/">
          Contato
        </a>
      </Menu>
    </Responsive>
  )
}

export default Hamburger
