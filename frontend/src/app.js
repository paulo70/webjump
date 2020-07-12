import React from 'react'

import Header      from './components/Header'
import Filter      from './components/Filter'
import Footer      from './components/Footer'
import Pagination  from './components/Pagination'

import Router from  './Router'

import './app.scss'

function App (){
  return (
    <div className='wrapper'>
     <Header />
    </div>
  )
}

export default App
