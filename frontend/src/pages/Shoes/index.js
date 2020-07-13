import React, { useState, useEffect} from 'react'
import axios from 'axios'

import Sort  from '../../components/Sort'
import Card  from '../../components/Card'
import Title from '../Titles'
import Error from '../Error'

function Shoes (){

  const URL = 'http://localhost:3001/shoes'

  const [ data, setData ]           = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isError, setIsError ]     = useState(false)

  useEffect(() => {
    const fecthData = async () => {

      try{
        const req = await axios (URL)
        const res = req.data.items
        setData(res)
      } catch (error) {
        setIsError(true)
      }
    }

    fecthData()
  },[URL])

  return (
    <>
      <Title title = 'Sapatos'/>

      <Sort />

      {isError && <Error />}

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


export default Shoes
