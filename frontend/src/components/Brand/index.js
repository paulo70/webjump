import React from 'react'

import Logo   from '../../assets/brand.svg'

import './brand.scss'
import './brand-devices.scss'

function Brand(){
  return (
    <div className='brand'>
      <h1><img className='brand-image' src = {Logo} /></h1>
    </div>
  )
}

export default Brand
