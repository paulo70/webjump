import React from 'react'

import Search from '../Search'
import Logo   from './brand.svg'

import './brand.scss'

function Brand(){
  return (
    <div className='container brand'>
      <div className='row'>
        <div className='col-xs-6 col-sm-6'>
          <h1><img className='brand-image' src = {Logo} /></h1>
        </div>
        <div className='col-xs-6 col-sm-6'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Brand
