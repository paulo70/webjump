import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card  from '../../components/Card'
import Sort  from '../../components/Sort/index'
import Title from '../Titles'

function Home(){

  const URL = 'http://localhost:3001/shoes'

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fecthData = async () => {
      setIsLoading(true)

      try{
        const req = await axios (URL)
        const res = req.data.items
        setData(res)

      } catch (error){
        setIsError(true)
      }

      setIsLoading(false)
    }

    fecthData()

  },[URL])


  return (
    <>
      <Title title = 'Sapatos'/>

      {isError && <div>Something went wrong ...</div>}

      { isLoading ? ( <div>Loading ...</div> ) : (

        <div className='box'>
          { data.map((item, index) =>
            <Card
              key   = { index }
              image = { item.image }
              name  = { item.name  }
              price = { item.price }
             />
          )}
        </div>
      )}
    </>
  )
}

export default Home
