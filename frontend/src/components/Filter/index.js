import React from 'react'

import './filter.scss'

function Filter(){

const categories = ['Roupas', 'Sapatos', 'Acessórios']
const type       = ['Roupas', 'Sapatos', 'Acessórios']


  return(
    <div className='col-xs-6 col-sm-6'>
      <div className='filter'>
        <h3 className='filter-title'>Filtre por</h3>

        <h4 className='filter-subtitle'>Categorias</h4>
        <ul className='filter-menu'>
          {categories.map((item, index) => (
            <li key = { index }>{item}</li>
          ))}
        </ul>

        <h4 className='filter-subtitle'>Tipo</h4>
        <ul className='filter-menu'>
          {type.map((item, index) => (
              <li key = { index }>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter
