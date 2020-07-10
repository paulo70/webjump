import React from 'react'
import ReactDOM from 'react-dom'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './app'
import Header from './components/Header'

ReactDOM.render(
  <>
    <Header />
    <App />
  </>,
  document.getElementById('root'))
