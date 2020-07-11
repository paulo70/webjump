import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from './home-card'
import './home.scss'

import Sort from '../../components/Sort/index'

function Home(){

  const URL = 'http://localhost:3001/shoes'
  const [data, setData] = useState([])

  useEffect(() => {
    const fecthData = async () => {
      const req = await axios (URL)
      const res = req.data.items

      setData(res)
    }

    fecthData()

  },[])


  return (
    <>
      <h2 className='title-pages'>Sapatos</h2>
      <Sort />
      <div className='home'>
        { data.map((item, index) =>
          <Card
            key   = { index }
            image = { item.image }
            name  = { item.name  }
            price = { item.price }
           />
        )}
      </div>
    </>
  )
}

export default Home
