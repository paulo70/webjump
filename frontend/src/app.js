import React from 'react'

import Filter      from './components/Filter'
import Footer      from './components/Footer'
import Pagination  from './components/Pagination'

import Router from  './Router'

import './app.scss'

function App (){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <Filter />
        </div>

        <div className='col-sm-9'>
          <Router />
        </div>

        <div className='col-sm-12'>
          <Pagination />
        </div>

        <div className='col-sm-12'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
