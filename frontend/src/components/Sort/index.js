import React from 'react'
import { Form } from 'react-bootstrap'

import './sort.scss'

import Tab1 from './tab-one.svg'
import Tab2 from './tab-two.svg'

function Sort(){
  return(
    <div className='sort'>
      <div className='col-5'>
        <ul className='sort-tabs'>
          <li><img  src = { Tab2 } /></li>
          <li><img  src = { Tab1 } /></li>
        </ul>
      </div>

      <div className='col-5 sort-select'>
        ordernar por :
        <Form.Control as ='select'>
          <option>Preço</option>
          <option>Genêro</option>
        </Form.Control>
      </div>
    </div>
  )
}


export default Sort
