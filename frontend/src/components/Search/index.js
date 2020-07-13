import React, { useState, useEffect } from 'react'
import {
  Responsive,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice
} from "responsive-react"

import './search.scss'
import './search-devices.scss'

function Search (){

  const [ show, setShowSearch ] = useState(false)

  function handleOpenSearch(){
    setShowSearch(!show)
  }

  return (
    <>
      <Responsive displayIn = {['mobile']}>
        <span
            className = 'search-icon'
            onClick   = { handleOpenSearch }
          >
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>

        { show ?

          <form className ='search-m'>
            <input type = 'text' className='search-m-input' />
            <button className='search-m-button'> Buscar </button>
          </form>

          : ''
        }
      </Responsive>

      <form className='search'>
        <input type = 'text' className='search-input' />
        <button className='search-button'> Buscar </button>
      </form>
    </>
  )
}

export default Search
