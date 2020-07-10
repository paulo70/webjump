import React from 'react'

import './sort.scss'

import Tab1 from './tab-one.svg'
import Tab2 from './tab-two.svg'

function Sort(){
  return(
    <div className='col-10'>
      <div className='sort'>
        <div className='col-5'>
          <ul className='sort-tabs'>
            <li><img  src = { Tab2 } /></li>
            <li><img  src = { Tab1 } /></li>
          </ul>
        </div>

        <div className='col-5'>
          ordernar por :
          <select>
            <option>Preço</option>
            <option>Genêro</option>
          </select>
        </div>
      </div>
    </div>
  )
}


export default Sort
