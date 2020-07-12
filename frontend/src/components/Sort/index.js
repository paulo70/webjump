import React from 'react'
import { Form, Row } from 'react-bootstrap'
import {
  Responsive,
  isMobileDevice,
  isTabletDevice,
  isLaptopDevice
} from 'responsive-react'

import './sort.scss'
import './sort-devices.scss'

import Tab1 from '../../assets/tab-one.svg'
import Tab2 from '../../assets/tab-two.svg'

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
          {isLaptopDevice(), isTabletDevice() && <li><span>ordernar por</span></li> }
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
