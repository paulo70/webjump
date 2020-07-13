import React from 'react'
import { A } from 'hookrouter'

import './breadcrumb.scss'
import './breadcrumb-devices.scss'

function BreadCrumb (){
  return (
    <div className='breadcrumbs'>
      <ul>
        <li><A href='#'>Página inicial > </A></li>
        <li><A href='#'>Sapatos </A></li>
      </ul>
    </div>
  )
}

export default BreadCrumb
