import React from 'react'

import Filter from './components/Filter'
import Sort   from './components/Sort'

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
          <Sort />
          <Router />
        </div>
      </div>
    </div>
  )
}

export default App
