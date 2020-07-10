import React from 'react'

import './menu.scss'

function Menu(){
 return (
    <div className='container-fluid menu'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12'>
            <nav className='menu-nav'>
              <ul>
                <li>Página Inicial</li>
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Sapatos</li>
                <li>Contato</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
