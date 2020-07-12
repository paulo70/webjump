import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { A } from 'hookrouter'
import {
  Responsive,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice
} from 'responsive-react'

function Items (){

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
    <Responsive displayIn={['laptop', 'tablet']}>
      <ul>
        <li>
          <A href = '/'>
            Página Inicial
          </A>
        </li>

        {data.map((item, index) =>
          <li key = { index }>
            <A href = {item.path}>
              {item.name}
            </A>
          </li>
        )}

        <li>
          <A href = '#'>
            Contato
          </A>
        </li>
      </ul>
    </Responsive>
  )
}

export default Items
