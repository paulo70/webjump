import React from 'react'

import Filter from './components/Filter'
import Sort   from './components/Sort'
import Shirt  from './pages/Shirt'

import Router from  './Router'

import './app.scss'

function App (){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-2'>
          <Filter />
          <Router />
        </div>
      </div>
    </div>
  )
}

export default App
