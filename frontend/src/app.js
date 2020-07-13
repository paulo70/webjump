import React from 'react'

import Header      from './components/Header'
import BreadCrumb  from './components/BreadCrumb'
import Filter      from './components/Filter'
import Footer      from './components/Footer'
import Pagination  from './components/Pagination'

import Router from  './Router'

import './app.scss'
import './app-devices.scss'

function App (){
  return (
    <div className='wrapper'>
      <Header />
      <BreadCrumb />
      <div className='content'>
        <Filter />
        <section>
          <Router />
          <Pagination />
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default App
