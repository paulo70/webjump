import React from 'react'

import Color from '../Colors'

import './filter.scss'

function Filter(){

const categories = ['Roupas', 'Sapatos', 'Acessórios']
const type       = ['Corrida', 'Caminhada', 'Casual', 'Social']


  return(
    <div className='filter'>
      <h3 className='filter-title'>Filtre por</h3>

      <h4 className='filter-subtitle'>Categorias</h4>
      <ul className='filter-menu'>
        {categories.map((item, index) => (
          <li key = { index }>{item}</li>
        ))}
      </ul>

      <h4 className='filter-subtitle'>Cores</h4>
      <Color />

      <h4 className='filter-subtitle'>Tipo</h4>
      <ul className='filter-menu'>
        {type.map((item, index) => (
            <li key = { index }>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
