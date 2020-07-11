import React from 'react'
import { Form, Row } from 'react-bootstrap'

import './sort.scss'

import Tab1 from './tab-one.svg'
import Tab2 from './tab-two.svg'

function Sort(){
  return(
    <div className='sort'>
      <div className='sort-items'>
        <ul>
          <li><img  src = { Tab2 } /></li>
          <li><img  src = { Tab1 } /></li>
        </ul>
      </div>

      <div className='sort-items'>
        <ul className='itens-end'>
          <li><span>ordernar por</span></li>
          <li>
            <Form.Control as ='select'>
              <option>Preço</option>
              <option>Genêro</option>
            </Form.Control>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sort
