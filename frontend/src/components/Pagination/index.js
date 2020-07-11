import React from 'react'
import { A } from 'hookrouter'

import './pagination.scss'

function Pagination (){
  const numbers = ['1', '2', '3', '4', '5']

  return (
    <div className='pagination'>
      <span className='pagination-prev'></span>
      <ul className='pagination-numbers'>
        {numbers.map((item, index) => (
          <li key = {index}><A href='#'>{item}</A></li>
        ))}
      </ul>
      <span className='pagination-next'></span>
    </div>
  )
}

export default Pagination
