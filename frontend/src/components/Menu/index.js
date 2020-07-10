import React from 'react'

import UL from './items'

import './menu.scss'

function Menu(){
 return (
    <div className='container-fluid menu'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12'>
            <nav className='menu-nav'>
              <UL />
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
