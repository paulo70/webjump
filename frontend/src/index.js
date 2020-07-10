import React from 'react'
import ReactDOM from 'react-dom'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './app'
import Register from './components/Register'

ReactDOM.render(
  <>
    <Register />
    <App />
  </>,
  document.getElementById('root'))
