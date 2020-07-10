import React from 'react'

import './search.scss'

function Search (){
  return (
    <form className='search'>
      <input type = 'text' className='search-input' />
      <button className='search-button'> Buscar </button>
    </form>
  )
}

export default Search
