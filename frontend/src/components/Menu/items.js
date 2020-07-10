import React from 'react'
import { A } from 'hookrouter'

function Items (){
  return (
    <ul>
      <li>
        <A href = '/'>
          Página Inicial
        </A>
      </li>
      <li>
        <A href='/shirt'>
          Camisetas
        </A>
      </li>
      <li>
       <A href = '/paint'>
        Calça
       </A>
      </li>
      <li>
        <A href = '/shoes'>
        Sapatos
        </A>
      </li>
      <li>
        <A href = '/contact'>
          Contato
        </A>
      </li>
    </ul>
  )
}

export default Items
